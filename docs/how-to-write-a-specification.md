# How to write a specification

A formal specification defines the relationship between **input** `In:` and **output** `Out:`, constrained by **pre-conditions** `Pre:` and guaranteed by **post-conditions** `Post:`.

## **Input declaration `In:`**

Declarations follow the simple pattern: data\_name $\in$ Set. Data names should start with a **lowercase letter**, and declarations are separated by commas.

### **Elementary sets**

| Notation | Set Name | Description | Example Declaration |
| :--- | :--- | :--- | :--- |
| $\mathbb{N}$ | Natural numbers | Non-negative integers: $\{0, 1, 2, \dots\}$ | `a∈N` or `a2 eleme N`|
| $\mathbb{Z}$ | Integers | All positive and negative whole numbers. | `b∈Z` |
| $\mathbb{R}$ | Real numbers | All rational and irrational numbers. | `c∈R` |
| $\mathbb{L}$ | Logical (Boolean) values | **True** or **False**. | `d∈L` |
| $\mathbb{S}$ | Strings | Sequences of characters. | `e∈S` |
| $\mathbb{C}$ or $\mathbb{K}$ | Characters | Single characters. | `f∈C` or `f2∈K` |

### **Intervals and ranges**

| Example | Description |
| :--- | :--- |
| `iv1∈[1..3]` | The value of iv1 must be an integer between 1 and 3, inclusive. |

### **Indexed sequences and arrays**

| Notation | Description | Indexing/Length |
| :--- | :--- | :--- |
| `x1∈N[1..3]` | An array of **3 natural numbers**. | Index range **1..3**. (Element referencing: e.g., `x1[2]`). |
| `n∈N, x∈Z[1..n]` | The array size `n` is part of the input, and the array `x` is composed of integers. | Indexed from `1` to `n`. |
| `x3∈N[1..]` | An array of natural numbers of some unknown length. | Indexed starting from `1`. The actual length is determined by the input data. |

---

## **2. Post-conditions `Post:`**

Post-conditions use logical and mathematical expressions to define what **must be true** after the operation is complete.

### **Logical quantifiers**

| Keywords | Example | Description |
| :--- | :--- | :--- |
| $\forall$ (forall) | `∀i∈[1..5]:(i>0)` | **For all** $i$ in the set $[1..5]$, the statement is true. |
| $\exists$ (exists) | `∃i∈[1..3]: (i=2)` | **There exists** an $i$ in the set $[1..3]$ such that the statement is true. |

### **Array and matrix operations**

| Operation | Formula | Description |
| :--- | :--- | :--- |
| **All elements** (Universal Quantifier) | `∀i∈[1..n]: (x[i] > 10)` | Used to assert a property holds for every element in a sequence or array. |
| **At least one element** (Existential Quantifier) | `∃i∈[1..n]: (x[i] < 3)` | Used to assert that a property holds for one or more elements in a sequence or array. |
| **Length function** (`len`) | `∃i∈[1..len(x3)]:(x3[i]<3)` | Dynamically determines the size of an array $\text{x3}$ (where the length is not fixed) for quantification. |
| **Nested Quantifier** (Matrix) | `∀i∈[1..8]:(∃j∈[1..8]:(m1[i,j]=10))` | Used for two-dimensional structures (matrices) where a property is checked across rows and columns. |

### **Structuring data**

| Data Structure | Example | Description |
| :--- | :--- | :--- |
| **Records (structs)** | `r1.name="Victor" ∧ r1.grade=5` | Fields are referenced using dot notation. (The symbol $\land$ is logical AND). |
| **Tuples** | `(3,5).1=3 ∧ (3,5).2=5` | Elements are referenced by their number (1-indexed). |
| **Array Equality** | `[1, 2, 3]=[1, 2, 3]` | Checks if two arrays are identical. |