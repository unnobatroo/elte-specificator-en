# POA's cheatsheet

- The **counting loop** is used when the number of iterations is known in advance (e.g., iterating through an entire array or interval `[b..e]`.
- The **conditional loop** is used when the number of iterations is dependent on a condition being met (e.g., stopping as soon as the element is found, as in Search or Decision).

| # | Pattern | Description | Structure | Underlying Loop Structure |
| :--- | :--- | :--- | :--- | :--- |
| 1 | **Summation** | Calculates the **sum** `s` of a function `f(i)` for all elements $i$ in a given integer interval `[b..e]`. | `s = SUM(i=b..e, f(i))` | Counting Loop |
| 2 | **Counting** | Determines the **number of times** `cnt` a condition `A(i)` is true on the interval `[b..e]`. | `cnt = COUNT(i=b..e, A(i))` | Counting Loop |
| 3 | **Maximum Selection** | Finds the **index** `maxind` and **maximum value** `maxval` of a function `f(i)` on a non-empty interval `[b..e]`. | `maxind, maxval = MAX(i=b..e, f(i))` | Counting Loop |
| 4 | **Minimum Selection** | Finds the **index** `minind` and **minimum value** `minval` of a function `f(i)` on a non-empty interval `[b..e]`. | `minind, minval = MIN(i=b..e, f(i))` | Counting Loop |
| 5 | **Copy** | Creates a new sequence ($y$) by assigning to every element in the interval `[b..e]` the value produced by the function `f(i)`. | `y = COPY(i=b..e, f(i))` | Counting Loop |
| 6 | **Multiple Item Selection (MIS)** | Collects and lists all the values of `f(i)` from the interval `[b..e]` for which the condition `A(i)` is true. Output includes the count `cnt` and the list `y`. | `cnt, y = MIS(i=b..e, A(i), f(i))` | Counting Loop |
| 7 | **Search** | Determines if an element exists in the interval `[b..e]` that satisfies a condition `A(i)`, and if so, finds the **first** such point `ind`. | `exists = &exists; i ∈ [b..e]:(A(i))` | Conditional Loop |
| 8 | **Decision (Exists)** | Determines whether a condition `A(i)` is true for **at least one** element in the interval `[b..e]`. Result is a single Boolean value `exists`. | `exists = SEARCH(i=b..e, A(i))` | Conditional Loop |
| 9 | **Selection** | Finds the **leftmost** point `ind` starting from `b` where the condition `A(i)` is true, *assuming* such a point is guaranteed to exist. | `ind = SELECT(i \ge b, A(i))` | Conditional Loop |
| 10 | **Decision All** | Determines whether a condition `A(i)` is true for **all** points in the interval `[b..e]`. Result is a single Boolean value `all`. | `all = FORALL(i=b..e, A(i))` | Conditional Loop |
| 11 | **Conditional Max/Min Selection** | Finds the maximum or minimum value of `f(i)` on `[b..e]`, but **only among points satisfying `A(i)`**. Output includes a boolean `exists`. | `exists, ind, val = CONDMAX/MIN(i=b..e, f(i), A(i))` | Combined Patterns |