# Day 11 – File Handling, JSON, APIs, and Virtual Environment in Python

**Date:** 8th July 2026

---

## Overview

The eleventh day of the Agentic AI with Python Training focused on **File Handling** and **Input/Output (I/O) Operations** in Python. We learned how to work with different file formats such as **TXT (.txt)**, **CSV (.csv)**, and **JSON (.json)**, and performed operations like reading, writing, and appending data. The session also introduced **Input and Output Streams**, **In-Memory Streams**, Python's built-in **JSON module**, **REST APIs**, **API keys**, and the creation of **Virtual Environments (venv)**. Practical activities included working with the **News API**, **Weather API**, and analyzing objects from a previously developed Python program.

---

## Learning Highlights

### Topics Covered

* File Handling in Python
* File Input/Output (File I/O)
* File Operations and File Modes
* Working with Different File Formats
* Python Built-in JSON Module
* Introduction to APIs
* News API
* Weather API
* Virtual Environment (venv)
* Importance of Virtual Environments
* Class Activity – Object Analysis

---

## Session Details

### 1. File Handling in Python

* File handling is used to store and retrieve data permanently.
* Python provides built-in functions to create, open, read, write, append, and close files.
* It is commonly used for storing reports, logs, user information, and application data.
* Proper file handling improves data management and program efficiency.

### 2. File Input/Output (File I/O)

* Learned the concept of File I/O in Python.
* Understood how programs can store data permanently using files instead of keeping it only in memory.
* Learned how Python opens, reads, writes, and closes files.
* Discussed the importance of file handling in real-world applications such as logging, configuration files, and data storage.

### 3. File Operations and File Modes

Studied the different file modes available in Python.

#### Read Mode (`r`)

* Opens an existing file for reading.
* Used to retrieve data stored inside a file.
* Generates an error if the file does not exist.

#### Write Mode (`w`)

* Creates a new file if it does not exist.
* Overwrites the contents of an existing file.
* Used when new data needs to replace existing data.

#### Append Mode (`a`)

* Opens a file for adding new content.
* Preserves the existing data while inserting new information at the end of the file.
* Commonly used for maintaining logs and continuous records.

### 4. Working with Different File Formats

#### Text Files (.txt)

* Store plain text information.
* Easy to read and edit.
* Used for notes, logs, reports, and configuration files.

#### CSV Files (.csv)

* Store tabular data in rows and columns.
* Values are separated using commas.
* Commonly used for attendance, student records, employee details, and datasets.

#### JSON Files (.json)

* Store structured data as key-value pairs.
* Human-readable and machine-readable.
* Widely used for APIs, web applications, and configuration files.

### 5. Python Built-in JSON Module

* Python provides the built-in **json** module for handling JSON data.
* Converts Python objects into JSON format.
* Converts JSON data back into Python objects.
* Simplifies storing and exchanging structured data.
* Extensively used while working with REST APIs and web applications.

#### Advantages

* Lightweight and easy to understand.
* Human-readable format.
* Supports efficient data exchange.
* Compatible with most programming languages.

### 6. Introduction to APIs

#### REST API

* Enables communication between applications over the internet.
* Uses HTTP requests to retrieve or send data.
* Returns responses mostly in JSON format.
* Used to access online services and real-time information.

#### API Key

* A unique authentication key provided by the API service.
* Verifies the identity of the application.
* Prevents unauthorized access.
* Required before sending API requests.

#### News API

* Provides real-time news from various trusted sources.
* Supports categories such as Technology, Business, Sports, Health, Science, and Entertainment.
* Requires an API key for authentication.
* Returns news information in JSON format.
* Data includes headlines, source name, author, description, publication date, and article links.
* Demonstrates how Python retrieves and processes live data from the internet.

#### Weather API

* Provides current weather and forecast information.
* Requires an API key for secure access.
* Returns weather data in JSON format.
* Provides temperature, humidity, pressure, wind speed, visibility, and weather conditions.
* Helps understand API requests, JSON responses, and real-time data processing.
* Demonstrates practical API integration using Python.

### 7. Virtual Environment (venv)

* Learned what a **Virtual Environment** is in Python.
* Understood how it creates an isolated workspace for each project.
* Learned how to create and activate a virtual environment.
* Explored the role of virtual environments in managing project dependencies.

### 8. Importance of Virtual Environments

* Learned why virtual environments are essential for Python development.
* Prevent conflicts between different versions of libraries.
* Allow multiple projects to use different package versions independently.
* Keep project dependencies organized and isolated.
* Improve collaboration by making projects easier to share and reproduce.

### 9. Class Activity – Object Analysis

#### Objective

* Read the previously created **Session10B.py** file.
* Analyze the program and count the created objects.
* Export the object count into **CSV** and **TXT** files.

#### Generated Output

| Object         | Count |
| :------------- | ----: |
| Vehicle        |     5 |
| FastTag        |     5 |
| TollPlazaQueue |     1 |

#### Outcome

* Understood file reading and writing.
* Generated reports automatically using Python.
* Practiced working with both CSV and TXT file formats.

---

## Learning Outcomes

By the end of this session, we were able to:

* Perform file handling operations in Python.
* Work with TXT, CSV, and JSON files.
* Understand Input/Output and In-Memory Streams.
* Use Python's built-in JSON module.
* Access real-time data using REST APIs.
* Generate and use API keys.
* Create and manage Virtual Environments.
* Install external libraries.
* Generate object analysis reports using file handling.

---

## Concluding Remarks

Today's session introduced several practical concepts that are essential for software development. Learning file handling and JSON provided insight into how applications store and exchange data, while virtual environments highlighted the importance of maintaining isolated project dependencies. The introduction to APIs was particularly interesting, as it demonstrated how modern applications interact with external services to access data and functionality. These concepts form an important foundation for developing scalable Python applications and future Agentic AI projects.
