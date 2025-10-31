# POA's cheatsheet

- The **counting loop** is used when the number of iterations is known in advance (e.g., iterating through an entire array or interval `[b..e]`.
- The **conditional loop** is used when the number of iterations is dependent on a condition being met (e.g., stopping as soon as the element is found, as in Search or Decision).

| # | Pattern | Structure | Description | Underlying Loop Structure |
| :--- | :--- | :--- | :--- | :--- |
| 1 | **Summation** | `s = SUM(i=b..e, f(i))` | Calculates the **sum** `s` of a function `f(i)` for all elements $i$ in a given integer interval `[b..e]`. | Counting Loop |
| 2 | **Counting** | `cnt = COUNT(i=b..e, A(i))` | Determines the **number of times** `cnt` a condition `A(i)` is true on the interval `[b..e]`. | Counting Loop |
| 3 | **Maximum Selection** | `maxind, maxval = MAX(i=b..e, f(i))` | Finds the **index** `maxind` and **maximum value** `maxval` of a function `f(i)` on a non-empty interval `[b..e]`. | Counting Loop |
| 4 | **Minimum Selection** | `minind, minval = MIN(i=b..e, f(i))` | Finds the **index** `minind` and **minimum value** `minval` of a function `f(i)` on a non-empty interval `[b..e]`. | Counting Loop |
| 5 | **Copy** | `y = COPY(i=b..e, f(i))` | Creates a new sequence ($y$) by assigning to every element in the interval `[b..e]` the value produced by the function `f(i)`. | Counting Loop |
| 6 | **Multiple Item Selection (MIS)** | `cnt, y = MIS(i=b..e, A(i), f(i))` | Collects and lists all the values of `f(i)` from the interval `[b..e]` for which the condition `A(i)` is true. Output includes the count `cnt` and the list `y`. | Counting Loop |
| 7 | **Search** | `exists = &exists; i ∈ [b..e]:(A(i))` | Determines if an element exists in the interval `[b..e]` that satisfies a condition `A(i)`, and if so, finds the **first** such point `ind`. | Conditional Loop |
| 8 | **Decision (Exists)** | `exists = SEARCH(i=b..e, A(i))` | Determines whether a condition `A(i)` is true for **at least one** element in the interval `[b..e]`. Result is a single Boolean value `exists`. | Conditional Loop |
| 9 | **Selection** | `ind = SELECT(i \ge b, A(i))` | Finds the **leftmost** point `ind` starting from `b` where the condition `A(i)` is true, *assuming* such a point is guaranteed to exist. | Conditional Loop |
| 10 | **Decision All** | `all = FORALL(i=b..e, A(i))` | Determines whether a condition `A(i)` is true for **all** points in the interval `[b..e]`. Result is a single Boolean value `all`. | Conditional Loop |
| 11 | **Conditional Max/Min Selection** | `exists, ind, val = CONDMAX/MIN(i=b..e, f(i), A(i))` | Finds the maximum or minimum value of `f(i)` on `[b..e]`, but **only among points satisfying `A(i)`**. Output includes a boolean `exists`. | Combined Patterns |