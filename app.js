const REPO = {
  owner: 'Vanshika4705',
  name: 'AGENTIC-AI-WITH-PYTHON',
  branch: 'main',
};

const FALLBACK_REPORTS = Array.isArray(window.REPORTS) ? window.REPORTS : [];
const state = {
  reports: [],
  loading: true,
  source: 'GitHub',
  filter: '',
};

const $ = selector => document.querySelector(selector);
const API_ROOT = `https://api.github.com/repos/${REPO.owner}/${REPO.name}`;
const RAW_ROOT = `https://raw.githubusercontent.com/${REPO.owner}/${REPO.name}/${REPO.branch}`;
const BLOB_ROOT = `https://github.com/${REPO.owner}/${REPO.name}/blob/${REPO.branch}`;
const TREE_URL = `${API_ROOT}/git/trees/${REPO.branch}?recursive=1`;

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function inlineMarkdown(text = '') {
  const safe = escapeHtml(text);
  return safe
    .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`(.+?)`/g, '<code>$1</code>');
}

function markdownToHtml(markdown = '') {
  const lines = String(markdown).split(/\r?\n/);
  let html = '';
  let listOpen = false;
  let tableOpen = false;
  let codeOpen = false;

  const closeBlocks = () => {
    if (listOpen) {
      html += '</ul>';
      listOpen = false;
    }
    if (tableOpen) {
      html += '</tbody></table>';
      tableOpen = false;
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();

    if (line.startsWith('```')) {
      closeBlocks();
      if (codeOpen) {
        html += '</code></pre>';
        codeOpen = false;
      } else {
        html += '<pre><code>';
        codeOpen = true;
      }
      continue;
    }

    if (codeOpen) {
      html += `${escapeHtml(rawLine)}\n`;
      continue;
    }

    if (/^\|/.test(line)) {
      if (/^\|[\s|:-]+\|?$/.test(line)) {
        continue;
      }
      closeBlocks();
      if (!tableOpen) {
        html += '<table><tbody>';
        tableOpen = true;
      }
      const cells = line.split('|').slice(1, -1).map(cell => `<td>${inlineMarkdown(cell.trim())}</td>`);
      html += `<tr>${cells.join('')}</tr>`;
      continue;
    }

    if (tableOpen) {
      html += '</tbody></table>';
      tableOpen = false;
    }

    const heading = line.match(/^(#{1,3})\s+(.+)/);
    if (heading) {
      closeBlocks();
      const level = heading[1].length;
      html += `<h${level}>${inlineMarkdown(heading[2])}</h${level}>`;
      continue;
    }

    if (/^[-*] /.test(line.trim())) {
      if (!listOpen) {
        html += '<ul>';
        listOpen = true;
      }
      html += `<li>${inlineMarkdown(line.trim().slice(2))}</li>`;
      continue;
    }

    if (/^>\s?/.test(line.trim())) {
      closeBlocks();
      html += `<blockquote>${inlineMarkdown(line.trim().replace(/^>\s?/, ''))}</blockquote>`;
      continue;
    }

    if (/^---+$/.test(line.trim())) {
      closeBlocks();
      html += '<hr>';
      continue;
    }

    if (line.trim()) {
      closeBlocks();
      html += `<p>${inlineMarkdown(line)}</p>`;
    } else {
      closeBlocks();
    }
  }

  closeBlocks();
  if (codeOpen) {
    html += '</code></pre>';
  }
  return html;
}

function cleanSessionTitle(title) {
  return String(title || '')
    .replace(/^Session\s*\d+\s*[-:]\s*/i, '')
    .replace(/^Day\s*\d+\s*[-–—]\s*/i, '')
    .trim();
}

function extractTitle(markdown, fallback) {
  const match = String(markdown || '').match(/^#\s+(.+)$/m);
  return cleanSessionTitle(match ? match[1] : fallback);
}

function extractDate(markdown) {
  const match = String(markdown || '').match(/\*\*Date:\*\*\s*(.+)$/m);
  return match ? match[1].trim() : '';
}

function extractOverview(markdown) {
  const overview = String(markdown || '').match(/## Overview\s+([\s\S]*?)(?=\n##|\n---|$)/i);
  if (overview && overview[1].trim()) {
    return overview[1].trim().replace(/\*\*/g, '').replace(/`/g, '').replace(/\s+/g, ' ');
  }

  const paragraph = String(markdown || '').split(/\r?\n/).find(line => line.trim() && !/^#/.test(line.trim()) && !/^\*\*Date:\*\*/i.test(line.trim()));
  return paragraph ? paragraph.trim().replace(/\*\*/g, '').replace(/`/g, '') : '';
}

function extractTags(markdown) {
  return [...String(markdown || '').matchAll(/^### \d+\.\s+(.+)$/gm)]
    .map(match => match[1].replace(/\*\*|`/g, '').replace(/\r/g, '').trim())
    .filter(Boolean)
    .slice(0, 5);
}

function githubFolderUrl(folderName) {
  return `https://github.com/${REPO.owner}/${REPO.name}/tree/${REPO.branch}/${folderName}`;
}

function githubFileUrl(path) {
  return `${BLOB_ROOT}/${path}`;
}

function rawFileUrl(path) {
  return `${RAW_ROOT}/${path}`;
}

function isMarkdownFile(name) {
  return /\.md$/i.test(name);
}

function isImageFile(name) {
  return /\.(png|jpe?g|gif|webp|avif|svg)$/i.test(name);
}

function chooseMarkdownFile(files) {
  const preferredNames = ['README.md', 'Readme.md', 'readme.md', 'index.md', 'report.md'];
  const preferred = files.find(file => preferredNames.some(name => file.name.toLowerCase() === name.toLowerCase()));
  return preferred || files.find(file => isMarkdownFile(file.name)) || null;
}

async function fetchJson(url) {
  const response = await fetch(url, { headers: { Accept: 'application/vnd.github+json' } });
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }
  return response.json();
}

async function fetchText(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }
  return response.text();
}

function buildReportsFromTree(tree = []) {
  const folders = new Map();

  for (const node of tree) {
    if (node.type !== 'blob') {
      continue;
    }

    const match = node.path.match(/^(DAY-(\d+))\/(.+)$/i);
    if (!match) {
      continue;
    }

    const folderName = match[1];
    const day = Number(match[2]);
    const fileName = match[3];

    if (!folders.has(day)) {
      folders.set(day, {
        day,
        folderName,
        folderUrl: githubFolderUrl(folderName),
        files: [],
      });
    }

    folders.get(day).files.push({
      name: fileName,
      path: node.path,
      url: githubFileUrl(node.path),
      rawUrl: rawFileUrl(node.path),
      isMarkdown: isMarkdownFile(fileName),
      isImage: isImageFile(fileName),
    });
  }

  return [...folders.values()].sort((left, right) => right.day - left.day);
}

async function hydrateReportsFromGithub() {
  const tree = await fetchJson(TREE_URL);
  const folders = buildReportsFromTree(tree.tree || []);

  return Promise.all(folders.map(async folder => {
    const markdownFile = chooseMarkdownFile(folder.files);
    const markdown = markdownFile ? await fetchText(markdownFile.rawUrl).catch(() => '') : '';
    return {
      ...folder,
      markdownFile,
      markdown,
      title: markdown ? extractTitle(markdown, folder.folderName) : folder.folderName,
      date: markdown ? extractDate(markdown) : '',
      overview: markdown ? extractOverview(markdown) : `Uploaded files inside ${folder.folderName}.`,
      tags: markdown ? extractTags(markdown) : [],
    };
  }));
}

function fallbackReports() {
  return FALLBACK_REPORTS.map(report => ({
    ...report,
    folderName: report.folderName || report.folder || `DAY-${report.day}`,
    folderUrl: report.folderUrl || githubFolderUrl(report.folderName || `DAY-${report.day}`),
    files: (report.files || []).map(file => ({
      ...file,
      isMarkdown: Boolean(file.isMarkdown || isMarkdownFile(file.name)),
      isImage: Boolean(file.isImage || isImageFile(file.name)),
    })),
    markdownFile: report.markdownFile || null,
    title: report.title || report.folderName || `DAY-${report.day}`,
    date: report.date || extractDate(report.markdown || ''),
    overview: report.overview || extractOverview(report.markdown || ''),
    tags: report.tags || extractTags(report.markdown || ''),
  }));
}

function buildFileCards(files) {
  if (!files.length) {
    return '<p class="muted">No files were found in this session folder yet.</p>';
  }

  return `<div class="file-grid">${files.map(file => {
    if (file.isImage) {
      return `
        <a class="file-preview" href="${file.url}" target="_blank" rel="noreferrer">
          <img src="${file.rawUrl}" alt="${escapeHtml(file.name)}" loading="lazy" />
          <div class="caption">
            <strong>${escapeHtml(file.name)}</strong>
            <small>Image preview</small>
          </div>
        </a>
      `;
    }

    return `
      <a class="file-chip" href="${file.url}" target="_blank" rel="noreferrer">
        <span>${escapeHtml(file.name)}</span>
        <small>${file.isMarkdown ? 'Markdown' : 'File'}</small>
      </a>
    `;
  }).join('')}</div>`;
}

function render(filter = '') {
  const query = filter.trim().toLowerCase();
  const reports = state.reports;
  const shown = reports.filter(report => {
    const haystack = [
      report.title,
      report.overview,
      report.date,
      report.folderName,
      ...(report.tags || []),
      ...(report.files || []).map(file => file.name),
      report.markdown || '',
    ].join(' ').toLowerCase();
    return haystack.includes(query);
  });

  $('#timeline').innerHTML = reports.map(report => `
    <button class="timeline-btn" data-day="${report.day}">
      <strong>Session ${String(report.day).padStart(2, '0')}</strong>
      <span>${report.date || report.folderName}</span>
    </button>
  `).join('');

  $('#report-list').innerHTML = shown.map(report => `
    <article class="report-card" data-day="${report.day}" tabindex="0">
      <span class="day-number">SESSION ${String(report.day).padStart(2, '0')}</span>
      <div>
        <h3>${escapeHtml(cleanSessionTitle(report.title))}</h3>
        <p>${escapeHtml((report.overview || '').slice(0, 230))}${report.overview && report.overview.length > 230 ? '...' : ''}</p>
        <div class="tags">
          ${(report.tags || []).map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}
          <span class="tag">${report.files.length} file${report.files.length === 1 ? '' : 's'}</span>
        </div>
      </div>
      <div class="card-meta">
        <span>${escapeHtml(report.date || 'Uploaded on GitHub')}</span>
        <span class="arrow">↗</span>
      </div>
    </article>
  `).join('');

  $('#empty').hidden = shown.length > 0;
  $('#empty').textContent = state.loading ? 'Loading sessions from GitHub...' : 'No sessions match your search yet.';
  $('#day-count').textContent = `${String(reports.length).padStart(2, '0')} sessions`;
  $('#stat-sessions').textContent = String(reports.length).padStart(2, '0');
  $('#stat-files').textContent = String(reports.reduce((sum, report) => sum + report.files.length, 0)).padStart(2, '0');
  $('#stat-tags').textContent = String(new Set(reports.flatMap(report => report.tags || [])).size || 0).padStart(2, '0');
  $('#topic-count').textContent = String(new Set(reports.flatMap(report => report.tags || [])).size || 0).padStart(2, '0');
  $('#file-count').textContent = String(reports.reduce((sum, report) => sum + report.files.length, 0)).padStart(2, '0');
  $('#last-updated').textContent = state.loading
    ? 'Loading from GitHub...'
    : state.source === 'GitHub'
      ? 'Live from GitHub'
      : 'Showing cached reports';

  document.querySelectorAll('.report-card').forEach(card => {
    const open = () => showReport(Number(card.dataset.day));
    card.onclick = open;
    card.onkeydown = event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        open();
      }
    };
  });

  document.querySelectorAll('.timeline-btn').forEach(button => {
    button.onclick = () => showReport(Number(button.dataset.day));
  });
}

function showReport(day) {
  const report = state.reports.find(entry => entry.day === day);
  if (!report) {
    return;
  }

  $('#reader-content').innerHTML = `
    ${report.markdown ? markdownToHtml(report.markdown) : `<h1>${escapeHtml(report.folderName)}</h1><p>${escapeHtml(report.overview)}</p>`}
    <div class="files-head">
      <h2>Files in this session</h2>
      <a class="button" href="${report.folderUrl}" target="_blank" rel="noreferrer">Open folder on GitHub</a>
    </div>
    ${buildFileCards(report.files)}
  `;

  $('#reader').showModal();
}

async function loadReports() {
  state.loading = true;
  state.reports = fallbackReports();
  render();

  try {
    state.reports = await hydrateReportsFromGithub();
    state.source = 'GitHub';
  } catch (error) {
    console.warn('Using cached session data because live GitHub fetch failed:', error);
    state.reports = fallbackReports();
    state.source = 'fallback';
  } finally {
    state.loading = false;
    render(state.filter);
  }
}

$('#search').oninput = event => {
  state.filter = event.target.value;
  render(state.filter);
};

$('.close').onclick = () => $('#reader').close();
$('#reader').onclick = event => {
  if (event.target === $('#reader')) {
    $('#reader').close();
  }
};

loadReports();
