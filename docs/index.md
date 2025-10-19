# Using the Specificator Tool

The Specificator tool helps validate data against formal specifications. This guide outlines the steps for using the tool and provides an example structure.

## Quick Start Guide

1.  **Enter the Specification:** Define your formal specification in the main editor panel.
2.  **Define the Data:** In the right-hand panel, press **Ctrl+Space** to generate a base data structure, then enter your test data.
3.  **Validation Result:** If the test case turns **green**, the data has satisfied the specification.
    * This result validates the correctness of the specification for that input.
4.  **Debugging:** Use the "Evaluate" button to display the step-by-step evaluation. This is useful for debugging, though it only works in simpler cases.

## Example Specification

This example checks if a student record (`s`) exists within an array of student records (`students`).

```text
In: n $\in$ $\mathbb{N}$, students $\in$ Student[1..n], Student=(name:S x grade:[1..5]), s $\in$ Student
Out: found $\in$ $\mathbb{L}$
Pre: -
Post: found = $\exists$ index $\in$ [1..n] : (students[index].name = s.name)