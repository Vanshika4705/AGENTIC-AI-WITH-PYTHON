# Session 6 : Functions and Memory Management in Python

**Date:** 1st July 2026

## Overview

The sixth day of the Agentic AI Training Program focused on understanding **Functions**, one of the most important concepts in Python programming. The session emphasized how functions improve code organization by dividing a large program into smaller, reusable modules. This approach makes programs more structured, easier to understand, maintain, and debug. Along with functions, we explored how Python manages memory during function execution, including the concept of reference copying, different methods of passing arguments, and the roles of Stack and Heap memory in storing variables and objects.

---

## Learning Highlights:

### 1. Functions in Python

* Studied the concept, purpose, and importance of functions in Python programming.
* Learned how functions divide complex programs into smaller, manageable, and reusable blocks of code.
* Understood the syntax for defining, calling, and executing functions.
* Discussed the advantages of using functions, including code reusability, modularity, easier debugging, simplified maintenance, and improved readability.
* Explored how functions contribute to writing efficient and well-structured programs.

---

### 2. Reference Copy in Functions

* Learned that Python follows the concept of **reference copying** while passing objects to functions.
* Understood that instead of creating a separate copy of an object, Python passes a reference to the existing object.
* Studied how changes made to mutable objects inside a function are reflected outside the function because both references point to the same object.
* Compared the behavior of mutable and immutable objects when passed as function arguments.
* Practiced examples to gain a clear understanding of how reference copying works during function execution.

---

### 3. Function Arguments

The session covered the different ways in which data can be passed to functions, making them more flexible and reusable.

#### • Positional Arguments

* Arguments are passed according to the order of the parameters defined in the function.
* The sequence of values must match the sequence of parameters.

#### • Variable-Length Arguments (`*args`)

* Learned how `*args` allows a function to accept any number of positional arguments.
* Useful when the exact number of inputs is unknown in advance.

#### • Keyword Arguments (`**kwargs`)

* Studied how `**kwargs` accepts arguments in the form of key-value pairs.

* Makes function calls more flexible, readable, and easier to understand.

* Useful when passing optional or named parameters.

* Discussed suitable scenarios for using each type of argument while designing Python functions.

---

### 4. Memory Management During Function Execution

* Understood that every function call creates a new **Stack Frame** in Stack memory.
* Learned that local variables and function-related information are temporarily stored in the Stack.
* Studied how **single-valued (immutable) objects**, such as integers, floats, strings, and tuples, are handled during function execution.
* Learned that **multi-valued (mutable) objects**, such as lists, dictionaries, and sets, are stored in Heap memory, while their references are maintained in the Stack.
* Explored how Stack and Heap memory work together during function execution.
* Understood how object references and memory allocation influence program behavior and output.

---

## Session Outcomes:

* Developed a comprehensive understanding of Python functions and their significance in modular programming.
* Learned how Python manages function calls through reference copying rather than creating duplicate objects.
* Gained practical knowledge of positional arguments, variable-length arguments (`*args`), and keyword arguments (`**kwargs`).
* Strengthened understanding of Stack and Heap memory management during function execution.
* Learned the difference between mutable and immutable objects and how they behave when passed to functions.
* Improved the ability to write organized, reusable, and efficient Python programs.

---

## Concluding Reamrks:

Today's session significantly enhanced my understanding of Python functions and the way memory is managed during program execution. Learning about reference copying helped me understand how Python handles objects efficiently without creating unnecessary duplicates. The discussion on positional arguments, `*args`, and `**kwargs` provided valuable insights into designing flexible and reusable functions. Understanding the roles of Stack and Heap memory, along with the behavior of mutable and immutable objects, strengthened my grasp of Python's internal working. Overall, the concepts covered in this session have built a strong foundation for writing efficient, maintainable, and scalable Python programs, which will be highly beneficial while developing advanced Agentic AI applications in the future.
