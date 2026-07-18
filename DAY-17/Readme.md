# Day 17 – Advanced Python Programming: Iterators, Generators, Decorators & Functional Programming

**Date:** 16th July 2026

---

## Overview

The seventeenth day of the **Agentic AI with Python Training Program** focused on advanced Python programming concepts that help in developing efficient, reusable, and maintainable applications. The session covered **Iterators, Generators, Decorators, Lambda Functions**, and **Functional Programming** using `map()`, `filter()`, and `reduce()`. Practical exercises, including employee tax computation, subscription plan calculations, and flight data processing, provided hands-on experience in applying these concepts to real-world programming scenarios.

---

## Topics Covered

* Iterators and the Iteration Protocol
* Iterators on Lists, Tuples, Sets, Strings, and Dictionaries
* Generators and the `yield` Keyword
* Decorators
* Lambda Functions
* Functional Programming using `map()`, `filter()`, and `reduce()`
* The `functools` Module
* Flight Dictionary Assignment

---

### 1. Iterators

An **Iterator** is an object that allows sequential access to the elements of an iterable **one element at a time**. It operates using Python's `iter()` and `next()` functions and follows the iteration protocol, enabling efficient traversal of data without loading the entire collection into memory simultaneously.

* Created iterator objects using the `iter()` function.
* Retrieved elements sequentially with the `next()` function.
* Understood Python's iteration protocol and the internal working of loops.
* Explored iterator behavior across lists, tuples, sets, strings, and dictionaries.
* Learned how iterators improve memory efficiency by processing elements on demand.

---

### 2. Iterators on Different Data Structures

Python provides iterator support for all built-in collection types. The order of traversal depends on the characteristics of each data structure, such as whether it is ordered, unordered, mutable, or immutable.

* **List** – Iterates through elements in insertion order (ordered and mutable).
* **Tuple** – Traverses elements sequentially while maintaining insertion order (ordered and immutable).
* **Set** – Iterates through unique elements without maintaining a fixed order.
* **String** – Processes one character at a time.
* **Dictionary** – Iterates over keys by default, while associated values can be accessed using those keys.

---

### 3. Generators

A **Generator** is a special type of function that produces values **one at a time** using the `yield` keyword instead of returning all values at once. After each `yield`, execution is paused and resumes from the same point when the next value is requested, making generators highly memory efficient.

* Understood the difference between `return` and `yield`.
* Learned the concept of lazy evaluation.
* Explored memory-efficient programming using generators.
* Studied how generators efficiently process large datasets by generating values only when required.

---

### 4. Decorators

A **Decorator** is a design feature that extends the functionality of an existing function without modifying its original implementation.

* Implemented decorators using the `@decorator` syntax.
* Learned the concept of function wrapping.
* Improved code reusability and maintainability.
* Explored practical applications such as logging, authentication, input validation, and performance monitoring.

---

### 5. Lambda Functions

A **Lambda Function** is a compact **anonymous (unnamed) function** created using the `lambda` keyword. It is useful for writing short, single-expression functions without explicitly defining them using the `def` keyword, resulting in cleaner and more concise code.

```python
lambda arguments: expression
```

#### Applications

* Arithmetic calculations
* Employee tax computation
* Monthly subscription calculations
* Half-yearly subscription calculations
* Annual subscription calculations

---

### 6. Functional Programming

**Functional Programming** is a programming paradigm that processes data by applying functions directly to iterables rather than using explicit loops. This approach results in cleaner, more readable, and efficient code.

#### `map()`

The `map()` function applies a specified function to every element in an iterable and returns a new iterable containing the transformed values.

**Applications**

* Performs data transformation.
* Minimizes the use of explicit loops.
* Produces concise and readable code.

#### `filter()`

The `filter()` function returns only those elements from an iterable that satisfy a specified condition.

**Applications**

* Extracts data based on given conditions.
* Simplifies conditional data selection.
* Improves code readability and maintainability.

#### `reduce()`

The `reduce()` function repeatedly applies a function to the elements of an iterable until a single cumulative result is obtained. It is available in Python's `functools` module.

**Applications**

* Computes cumulative values and totals.
* Performs aggregation operations.
* Simplifies collection-based calculations.

---

### 7. Flight Dictionary Assignment

#### Objective

Applied functional programming concepts to process and analyze a collection of flight records represented as dictionaries.

#### Tasks Performed

* Extracted flight information using `map()`.
* Filtered flight records using `filter()`.
* Calculated cumulative results using `reduce()`.
* Implemented lambda expressions throughout the solution.

---

## Practical Implementation

During the practical session, the following tasks were completed:

* Implemented iterators for lists, tuples, sets, strings, and dictionaries.
* Developed generators using the `yield` keyword.
* Created decorators to extend function behavior.
* Applied lambda functions for tax and subscription calculations.
* Used `map()`, `filter()`, and `reduce()` for efficient data processing.
* Successfully completed the Flight Dictionary Assignment.

---

## Session Outcomes

* Developed a comprehensive understanding of Python's iteration mechanism through the use of `iter()` and `next()`.
* Learned how generators support memory-efficient programming by implementing lazy evaluation with the `yield` keyword.
* Understood how decorators enhance existing functions while improving code reusability and maintainability.
* Gained practical experience in creating concise and efficient functions using lambda expressions.
* Applied functional programming concepts with `map()`, `filter()`, and `reduce()` for data transformation, filtering, and aggregation.
* Strengthened analytical and problem-solving skills by implementing these concepts in practical scenarios such as tax computation, subscription management, and flight data analysis.
* Improved the ability to develop clean, modular, optimized, and scalable Python applications using advanced programming techniques.

---

## Concluding Reamrks

Today's session provided valuable exposure to advanced Python programming concepts and their practical applications. Understanding **Iterators, Generators, Decorators, Lambda Functions,** and **Functional Programming** enhanced my ability to write cleaner, more efficient, reusable, and memory-optimized code. The hands-on exercises, particularly the **Flight Dictionary Assignment**, reinforced these concepts by demonstrating their practical use in real-world data processing tasks. Overall, the session strengthened my confidence in applying advanced Python features and established a strong foundation for building scalable and efficient Python applications.
