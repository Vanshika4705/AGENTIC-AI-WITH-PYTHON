# Session 3 – Hashing, Memory Management & Python Data Structures

**Date:** 27th June 2026

## Overview

The third day of the **Agentic AI with Python Training Program** focused on understanding how Python stores, organizes, and manages data in memory. The session introduced the concept of hashing and its role in efficient data retrieval. We also explored how single-valued and multi-valued data are stored in memory, learned the working of Stack and Heap memory, discussed memory allocation challenges, and studied Python's core data structures—List, Tuple, Set, and Dictionary. The session concluded with practical assignments that helped us apply these concepts in real-world scenarios.

---

## Learning Highlights

### 1. Introduction to Hashing

- Learned the basic concept of hashing.
- Understood how a hash function converts data into a fixed-size hash value for efficient storage and retrieval.
- Explored how hashing maps data to memory locations for faster searching and retrieval.
- Discussed the importance of hashing in improving program performance.
- Learned about common applications of hashing, including dictionaries, databases, and caching.

---

### 2. Storage of Data in Memory

- Explored how single-valued data and multi-valued data are stored in Python.
- Understood the role of:
  - **Stack Memory** for storing local variables, function calls, and execution information.
  - **Heap Memory** for storing dynamically allocated objects such as lists, dictionaries, sets, and other complex data structures.
- Learned how Python internally manages variables and object references.
- Understood how memory allocation helps optimize program execution and resource utilization.

---

### 3. Memory Allocation Challenges

- Discussed common issues that arise during memory allocation and variable assignment.
- Learned how inefficient memory usage can affect application performance.
- Understood Python's automatic memory management and garbage collection mechanism.
- Explored the importance of efficient memory utilization while developing scalable applications.

---

### 4. Python Data Structures

The session covered Python's four fundamental built-in data structures: **List, Tuple, Set, and Dictionary**. Each data structure serves a different purpose depending on how data needs to be stored, modified, and accessed. Understanding their characteristics helps in selecting the most appropriate data structure for efficient programming and better code organization.

---

### 5. Comparison Between List, Tuple, Set, and Dictionary

| **Feature** | **List** | **Tuple** | **Set** | **Dictionary** |
|--------------|----------|-----------|---------|----------------|
| **Definition** | Ordered collection of elements | Ordered collection of fixed elements | Collection of unique elements | Collection of key-value pairs |
| **Order** | Maintains insertion order | Maintains insertion order | Unordered | Maintains insertion order |
| **Duplicates** | Allowed | Allowed | Not Allowed | Keys must be unique (values may repeat) |
| **Mutability** | Mutable | Immutable | Mutable | Mutable |
| **Access Method** | Using indexes | Using indexes | No indexing | Using unique keys |
| **Best Use Case** | Dynamic collections | Fixed or constant data | Removing duplicates and set operations | Fast data lookup and structured data storage |

We also discussed the advantages and limitations of each data structure and learned how selecting the appropriate one improves code readability, execution efficiency, and memory utilization.

---

## Assignments

### 1. Flight Information Management

Created a **List** to store information about multiple flights. Each flight record included:

- Flight Number
- Airline Name
- Source
- Destination
- Departure Time
- Arrival Time
- Ticket Price

This assignment demonstrated how Lists can efficiently organize and manage structured multi-valued data.

---

### 2. Cinema Seat Booking System

Created a **Dictionary** containing **Lists of Dictionaries** to represent seat availability in a cinema hall.

The structure stored details such as:

- Screen or Hall
- Seat Number
- Seat Type
- Booking Status (Available/Booked)

This assignment demonstrated how nested data structures can effectively model real-world systems and organize complex information.

---

## Session Outcomes

- Developed a strong understanding of hashing and its role in efficient data retrieval.
- Learned how Python stores variables and objects using Stack and Heap memory.
- Understood memory allocation challenges and Python's automatic memory management techniques.
- Explored the features and practical applications of Python's built-in data structures.
- Compared List, Tuple, Set, and Dictionary based on ordering, mutability, uniqueness, and their appropriate use cases.
- Applied these concepts through practical assignments involving flight information management and cinema seat booking systems.
- Strengthened understanding of how proper data organization contributes to efficient, scalable, and maintainable software development.

---

## Concluding Remarks

Today's session provided valuable insights into Python's internal memory management and data organization techniques. Learning about hashing, Stack and Heap memory, memory allocation, and Python data structures strengthened my understanding of how Python manages data behind the scenes. The practical assignments allowed me to apply these concepts to real-world scenarios, making the learning process more interactive and meaningful. These foundational concepts will be highly beneficial for developing efficient, scalable, and optimized Python applications as well as Agentic AI systems in the future.
