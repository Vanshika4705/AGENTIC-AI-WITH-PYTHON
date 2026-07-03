# Day 7 – Recursion, Memory Management, Searching, and Sorting Algorithms in Python

**Date:** 2nd July 2026

## Overview

The seventh day of the Agentic AI with Python Training focused on understanding recursion, memory management, searching algorithms, and sorting algorithms. The session explained how recursive functions are executed internally using the Call Stack and how Stack Memory and Heap Memory work in Python. Different searching and sorting techniques were also discussed along with their working principles, filtering process, applications, and time complexity. The session also covered how recursion can be applied to solve various programming problems such as finding the product and maximum values.

---
## Learning Highlights:
### Topics Covered

- Introduction to Recursion
- Base Case and Recursive Case
- Working of Recursive Functions
- Call Stack
- Stack Memory
- Heap Memory
- Linear Search
- Binary Search
- Bubble Sort
- Filtering Algorithm
- Recursive Problem Solving
- Time Complexity of Searching and Sorting Algorithms

---

### 1. Recursion

- Recursion is a programming technique in which a function calls itself.
- It breaks a complex problem into smaller and simpler subproblems.
- Every recursive function consists of:
  - Base Case
  - Recursive Case
- The base case stops further recursive calls.
- The recursive case continues solving the problem until the base case is reached.
- Recursion is commonly used in tree traversal, graph traversal, divide-and-conquer algorithms, and mathematical computations.

---

### 2. Working of Recursion in Memory

- Every recursive function call creates a new stack frame.
- Function calls are stored in the Call Stack.
- Each function waits for the next recursive call to complete.
- Once the base case is reached, the functions return one by one.
- The Call Stack follows the **LIFO (Last In, First Out)** principle.
- Stack frames are automatically removed after the function execution is completed.

---

### 3. Stack Memory

- Stores function calls during program execution.
- Stores local variables.
- Stores function parameters.
- Stores return addresses.
- Works on the LIFO principle.
- Memory is automatically allocated and released.
- Provides faster access than Heap Memory.
- Every recursive call creates a separate stack frame.

---

### 4. Heap Memory

- Stores dynamically created objects.
- Used for storing lists, strings, dictionaries, tuples, sets, and objects.
- Shared among all functions in a program.
- Managed automatically by Python's Garbage Collector.
- Objects remain in memory until they are no longer referenced.

---

### 5. Linear Search

- Linear Search checks each element one by one until the required element is found.
- It starts searching from the first element.
- Works on both sorted and unsorted data.
- It is simple and easy to implement.
- Suitable for small datasets.

### Time Complexity

- Best Case: **O(1)**
- Average Case: **O(n)**
- Worst Case: **O(n)**

---

### 6. Binary Search

- Binary Search works only on sorted data.
- It follows the divide-and-conquer approach.
- Finds the middle element first.
- Compares the middle element with the target value.
- Eliminates half of the search space after every comparison.
- Continues until the required element is found.
- Much faster than Linear Search for large datasets.

### Time Complexity

- Best Case: **O(1)**
- Average Case: **O(log n)**
- Worst Case: **O(log n)**

---

### 7. Bubble Sort

- Bubble Sort repeatedly compares adjacent elements.
- Swaps elements if they are in the wrong order.
- After every pass, the largest unsorted element reaches its correct position.
- The process continues until the entire list becomes sorted.
- It is simple to understand and implement.
- Suitable for small datasets but inefficient for large datasets.

### Time Complexity

- Best Case: **O(n)**
- Average Case: **O(n²)**
- Worst Case: **O(n²)**

---

### 8. Filtering Algorithm

- A Filtering Algorithm selects only the required data based on a given condition.
- It removes unwanted elements and keeps only the matching ones.
- Commonly used in searching, data processing, and data analysis.
- Checks each element and returns only those that satisfy the condition.

### Applications

- Filtering even or odd numbers.
- Selecting records based on specific conditions.
- Extracting required data from a dataset.

### Time Complexity

- **Best Case:** O(n)
- **Average Case:** O(n)
- **Worst Case:** O(n)

---

### 9. Recursive Problem Solving

The following concepts were explored using recursion:

- Finding the product of multiple elements.
- Finding the maximum value.
- Breaking larger problems into smaller recursive subproblems.
- Returning the final result after reaching the base case.

---

## Session Outcomes:

- Understood the concept of recursion and studied how recursive function calls are managed using the Call Stack.
- Understood the execution of recursive functions in memory.
- Learned the working principle of Linear Search and its filtering process.
- Learned Binary Search using the divide-and-conquer approach.
- Studied the Bubble Sort algorithm and its working.
- Compared the efficiency of searching and sorting algorithms using time complexity.
- Explored recursive approaches for solving product and maximum problems.
- Improved logical thinking and algorithmic problem-solving skills.

---

## Concluding Remarks:

- Gained a strong understanding of recursion and recursive thinking.
- Learned how Python manages recursive function calls using the Call Stack.
- Understood the roles of Stack Memory and Heap Memory during program execution.
- Explored Linear Search, Binary Search, and Bubble Sort in detail.
- Learned the importance of choosing efficient algorithms based on time complexity.
- Built a strong foundation for advanced data structures, algorithms, and problem-solving techniques in Python.
