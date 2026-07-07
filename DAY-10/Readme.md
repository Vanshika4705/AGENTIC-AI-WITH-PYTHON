# Day 10 – Stack, Queue, OOP Modeling, and String Manipulation in Python

**Date:** 7th July 2026

---

## Overview

The tenth day of the Agentic AI with Python Training focused on strengthening our understanding of **Data Structures**, **Object-Oriented Programming (OOP)**, and **Python String Manipulation**. The session introduced the concepts of **Stack** and **Queue**, followed by the implementation of a **Toll Plaza Management System** using OOP principles. Practical exercises included modeling the relationship between **Vehicle** and **FASTag** objects, implementing a **Queue using a Circular Doubly Linked List**, and developing an automated toll deduction system. The session concluded with Python string formatting techniques and essential string operations for writing clean, efficient, and maintainable programs.

---

## Topics Covered

### 1. Stack and Queue in Data Structures

The session began with an introduction to two fundamental linear data structures that are widely used in software development.

* **Stack (LIFO – Last In, First Out)** and its operations: Push, Pop, and Peek.
* **Queue (FIFO – First In, First Out)** and its operations: Enqueue, Dequeue, and Traversal.
* Comparison between Stack and Queue.
* Real-world applications in process scheduling, memory management, browser history, and task management.

---

### 2. Modeling a Toll Plaza Management System Using OOP

A Toll Plaza Management System was developed to demonstrate the practical application of Object-Oriented Programming concepts.

The implementation included:

* Creating `Vehicle` and `FASTag` classes.
* Defining attributes and methods.
* Applying encapsulation to organize and protect data.
* Simulating real-world toll plaza operations.
* Developing modular, reusable, and maintainable code.

---

### 3. Vehicle and FASTag Object Relationship

The project established an association between **Vehicle** and **FASTag** objects to automate toll collection.

The implementation focused on:

* Assigning a unique FASTag to each vehicle.
* Managing vehicle information along with FASTag details.
* Accessing FASTag information during toll processing.
* Demonstrating interaction between multiple objects.

---

### 4. Queue Implementation Using a Circular Doubly Linked List

The vehicle queue was implemented using a **Circular Doubly Linked List** to achieve efficient queue management.

Topics covered:

* Dynamic node creation.
* Maintaining previous and next references.
* Circular linking of nodes.
* Efficient insertion and deletion.
* Continuous traversal of queue elements.
* Dynamic memory allocation.

---

### 5. Queue Operations

The following queue operations were implemented to simulate the movement of vehicles through the toll plaza:

* **Enqueue:** Added a vehicle to the rear of the queue.
* **Dequeue:** Removed the vehicle from the front after successful toll payment.
* **Traversal:** Displayed all vehicles currently waiting in the queue.
* **Display Queue:** Showed the complete status of the queue.
* **Queue Empty Check:** Verified whether the queue contained any vehicles.
* **Front and Rear Management:** Maintained the queue structure after every operation.

---

### 6. Automatic FASTag Toll Deduction Logic

An automated toll deduction system was implemented to simulate real-world FASTag transactions.

The system performed the following tasks:

* Identified the vehicle type.
* Calculated the applicable toll amount.
* Verified the available FASTag balance.
* Deducted the toll amount automatically.
* Updated the remaining account balance.
* Handled insufficient FASTag balance through validation.

---

### 7. Python String Formatting

Different string formatting techniques were explored to generate clean, readable, and dynamic output.

The following methods were practiced:

* Formatted String Literals (**f-Strings**)
* `format()`
* `format_map()`

These techniques simplify string formatting and improve code readability.

---

### 8. Python String Concepts

The following concepts were explored to understand how Python stores and manipulates textual data.

| Concept                 | Description                                                                              |
| ----------------------- | ---------------------------------------------------------------------------------------- |
| **String Immutability** | Strings cannot be modified after creation; any modification creates a new string object. |
| **Indexing**            | Accesses individual characters using their position.                                     |
| **Negative Indexing**   | Accesses characters from the end of the string using negative indices.                   |
| **Slicing**             | Extracts a specific portion of a string using a range of indices.                        |
| **Reverse Slicing**     | Reverses a string using the slicing operator `[::-1]`.                                   |
| **Concatenation**       | Combines two or more strings into a single string.                                       |
| **Splitting**           | Divides a string into multiple parts using a specified separator.                        |
| **Trimming**            | Removes leading and trailing whitespace from a string.                                   |

---

### 9. Built-in String Methods

The following built-in methods were used to perform common string manipulation tasks efficiently.

| Method         | Purpose                                                   |
| -------------- | --------------------------------------------------------- |
| `upper()`      | Converts all characters in a string to uppercase.         |
| `lower()`      | Converts all characters in a string to lowercase.         |
| `title()`      | Converts the first letter of each word to uppercase.      |
| `capitalize()` | Capitalizes only the first character of a string.         |
| `strip()`      | Removes leading and trailing whitespace.                  |
| `lstrip()`     | Removes whitespace from the beginning of a string.        |
| `rstrip()`     | Removes whitespace from the end of a string.              |
| `split()`      | Splits a string into a list using a specified separator.  |
| `replace()`    | Replaces a specified substring with another substring.    |
| `find()`       | Returns the index of the first occurrence of a substring. |

---

## Hands-on Experience

During the practical session, several Python programs were implemented to reinforce the concepts learned throughout the training.

The activities included:

* Developing `Vehicle` and `FASTag` classes using Object-Oriented Programming.
* Modeling the relationship between Vehicle and FASTag objects.
* Simulating a Toll Plaza Management System.
* Implementing a Queue using a Circular Doubly Linked List.
* Performing enqueue, dequeue, and traversal operations.
* Developing an automated toll deduction system based on vehicle type.
* Handling insufficient FASTag balance through validation.
* Practicing string formatting using **f-Strings**, `format()`, and `format_map()`.
* Implementing programs demonstrating indexing, slicing, concatenation, splitting, trimming, and built-in string methods.

---

## Session Outcomes

By the end of this session, I was able to:

* Understand the concepts and applications of Stack and Queue.
* Implement Queue using a Circular Doubly Linked List.
* Apply Object-Oriented Programming concepts to model real-world applications.
* Establish relationships between Vehicle and FASTag objects.
* Develop an automated FASTag toll deduction system.
* Handle exceptional scenarios such as insufficient FASTag balance.
* Apply Python string formatting techniques effectively.
* Perform common string manipulation operations using built-in methods.
* Integrate data structures, Object-Oriented Programming, and string processing concepts into practical Python applications.

---

## Concluding Remarks

This session provided a comprehensive understanding of **Data Structures**, **Object-Oriented Programming**, and **Python String Manipulation** through both theoretical discussions and practical implementation. Developing the Toll Plaza Management System strengthened my understanding of object relationships, queue management, and automated transaction processing, while the string manipulation exercises enhanced my ability to write clean, efficient, and maintainable Python programs. Overall, the session successfully combined theory with hands-on practice, improving both conceptual knowledge and practical problem-solving skills required for real-world software development.
