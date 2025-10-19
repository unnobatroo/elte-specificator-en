## Using the Specificator tool

1.  Enter the specification.
2.  In the right panel, press **Ctrl+Space** to get a base structure.
    Enter the data.
3.  If the test case turns green, then:
    * The data satisfied the specification; or vice versa.
    * The data validated the correctness of the specification.
4.  With the "Evaluate" button, the evaluation can also be displayed step-by-step. (Unfortunately, it only works in simpler cases, but it's good for debugging.)

### Example Specification

```
In:n∈N, students∈Student[1..n], Student=(name:S x grade:[1..5]), s∈Student
Out: found∈L
Pre:
Post: found = ∃ index ∈ [1..n]:(students[index].name = s.name)```