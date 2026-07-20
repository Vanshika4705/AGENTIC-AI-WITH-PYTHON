# Day 19 – Regular Expressions and Agentic AI Dashboard

**Date:** 20th July 2026

---

## Overview

The nineteenth day of the **Agentic AI with Python Training Program** focused on two significant areas of modern Python development: **Regular Expressions (Regex)** and the development of an **AI-powered multi-page Streamlit application** integrated with **OpenAI Function Calling** and **MongoDB Atlas**.

The session began with an introduction to Python's Regular Expressions, demonstrating how pattern matching simplifies searching, extracting, and validating structured information from text. The second half of the session concentrated on extending the Agentic AI project by integrating natural language understanding with backend database operations, enabling intelligent task management through AI.

Together, these topics illustrated how text processing, artificial intelligence, databases, and web applications can be combined to build practical real-world solutions.

---

## Learning Highlights

### Topics Covered

- Regular Expressions (Regex)
- Pattern Matching using Python `re` Module
- Data Extraction and Validation
- Multi-Page Streamlit Applications
- Streamlit Navigation
- OpenAI Responses API
- OpenAI Function Calling
- JSON Tool Schemas
- MongoDB Atlas Integration
- AI-Powered Task Management

---

### 1. Regular Expressions (Regex)

The session introduced Python's **re** module for pattern matching and text processing.

The following functions were explored:

| Function | Purpose |
|----------|---------|
| `re.search()` | Searches for the first occurrence of a pattern |
| `re.findall()` | Returns every matching pattern |
| `re.fullmatch()` | Validates an entire string |

Regular Expressions provide an efficient way to process large amounts of textual information while reducing the complexity of manual string manipulation.

---

### 2. Data Extraction and Validation

Several practical examples demonstrated how Regular Expressions can efficiently extract structured information from unstructured text.

Examples included:

- Indian Mobile Numbers
- Email Addresses
- Vehicle Registration Numbers
- PAN Card Numbers
- Numeric Values
- Alphanumeric Patterns

The trainer also demonstrated combining multiple patterns into a single Regular Expression, enabling simultaneous extraction of multiple data types from the same input text.
These techniques are commonly used in web applications, data processing pipelines, automation scripts, and form validation systems.

---

### 3. Multi-Page Streamlit Applications

The second part of the session introduced Streamlit's navigation system for building organized multi-page applications.

Separate pages were developed for:

- Dashboard
- AI Chat Interface
- Patient Management

The dashboard utilized several Streamlit components including:

- Metrics
- Columns
- Charts
- DataFrames
- Session State
- Cached Resources
- Sidebar Navigation
- Interactive Widgets
- Responsive Layout

The application was designed with a modular structure, allowing each page to handle a specific functionality while sharing common resources efficiently. Streamlit's navigation system simplified the development of scalable applications by separating the user interface into multiple logical sections. The use of session state ensured that user interactions and application data remained consistent across different pages, resulting in a smoother and more interactive user experience.

---

### 4. AI-Powered Agentic Task Manager

The primary project involved extending the Agentic AI application using the OpenAI Responses API.

Instead of manually identifying user intent through conditional statements, the Large Language Model analyzed natural language requests and automatically selected the appropriate backend function.

The application supported:

- Creating Tasks
- Viewing Tasks
- Updating Tasks
- Deleting Tasks

---

### 5. OpenAI Function Calling

One of the major concepts introduced during the session was **Function Calling**.

JSON Tool Schemas were created by defining:

- Function Name
- Description
- Parameters
- Required Fields

#### Workflow

1. User enters a natural language request.
2. OpenAI analyzes the request.
3. The model determines the appropriate backend function.
4. Required parameters are generated automatically.
5. Python executes the corresponding function.
6. MongoDB Atlas performs the required CRUD operation.
7. Results are displayed through the Streamlit interface.

This workflow demonstrated how AI models can intelligently automate backend operations while maintaining modular and scalable application architecture.

---

### 6. MongoDB Integration

MongoDB Atlas served as the application's persistent database.

The custom **DBHelper** class handled CRUD operations including:

- Document Insertion
- Data Retrieval
- Updating Records
- Deleting Records

Additional task metadata such as creation timestamps and task status were generated automatically before storing each task.

Separating database logic from the AI layer improved code maintainability and application architecture.

---

### 7. Class Activity

During the practical session, a complete AI-powered Task Management application was developed.

The application successfully performed:

- Task Creation
- Task Listing
- Task Updating
- Task Deletion

using:

- Streamlit
- OpenAI Function Calling
- MongoDB Atlas

The project also incorporated Streamlit Session State, Chat Interface, Typing Animation, Cached Resources, and Multi-Page Navigation to create a professional user experience.

---

### Technologies Used

| Technology | Purpose |
|------------|----------|
| Python | Core Programming Language |
| Regular Expressions (`re`) | Pattern Matching & Validation |
| Streamlit | Interactive Web Application Development |
| OpenAI Responses API | Natural Language Understanding |
| Function Calling | Intelligent Backend Automation |
| MongoDB Atlas | Cloud Database |
| DBHelper | Database CRUD Operations |
| JSON | Tool Schema Definition |


## Session Outcomes

- Developed an understanding of Python Regular Expressions.
- Learned pattern matching using `re.search()`, `re.findall()`, and `re.fullmatch()`.
- Extracted structured information from textual data.
- Validated Indian phone numbers, PAN numbers, vehicle registration numbers, and email addresses.
- Built a professional multi-page Streamlit application.
- Created interactive dashboards using Streamlit components.
- Integrated OpenAI Function Calling into a Python application.
- Connected MongoDB Atlas using a reusable DBHelper class.
- Understood JSON Tool Schemas for AI-driven backend automation.
- Built a complete AI-powered Agentic Task Management application.

---

## Concluding Remarks
Day 19 was one of the most insightful and technically enriching sessions of the Agentic AI with Python Training Program. The session successfully combined the concepts of text processing, artificial intelligence, cloud databases, and modern web application development into a unified real-world project.
The introduction to Regular Expressions significantly enhanced my understanding of pattern matching, data extraction, and input validation techniques. Equally valuable was learning OpenAI Function Calling, which demonstrated how Large Language Models can intelligently interpret user requests and automate backend operations without relying on manually written conditional logic.
Developing a multi-page Streamlit application integrated with MongoDB Atlas strengthened my understanding of designing modular, scalable, and production-ready AI systems. Overall, this session expanded my practical knowledge of full-stack AI application development and provided valuable experience in building intelligent software capable of solving real-world problems through natural language interactions.
