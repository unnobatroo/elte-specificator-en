# How to Write a Specification

A formal specification defines the relationship between **input** ($\text{In}:$) and **output** ($\text{Out}:$), constrained by **pre-conditions** ($\text{Pre}:$) and guaranteed by **post-conditions** ($\text{Post}:$).

## **Input Declaration `In:`**

Declarations follow the simple pattern: data\_name $\in$ Set. Data names should start with a **lowercase letter**, and declarations are separated by commas.

### **Elementary Sets**

| Notation | Set Name | Description | Example Declaration |
| :--- | :--- | :--- | :--- |
| $\mathbb{N}$ | Natural numbers | Non-negative integers: $\{0, 1, 2, \dots\}$ | `a∈N` or `a2 eleme N`|
| $\mathbb{Z}$ | Integers | All positive and negative whole numbers. | `b∈Z` |
| $\mathbb{R}$ | Real numbers | All rational and irrational numbers. | `c∈R` |
| $\mathbb{L}$ | Logical (Boolean) values | **True** or **False**. | `d∈L` |
| $\mathbb{S}$ | Strings | Sequences of characters. | `e∈S` |
| $\mathbb{C}$ or $\mathbb{K}$ | Characters | Single characters. | `f∈C` or `f2∈K` |

### **Intervals and Ranges**

| Example | Description |
| :--- | :--- |
| `iv1∈[1..3]` | The value of iv1 must be an integer between 1 and 3, inclusive. |

### **Indexed Sequences and Arrays**

These are used for handling many elements of the same type.

* `x1∈N[1..3]`: An array of **3 natural numbers**, with index range **1..3**. (Element referencing: e.g., `x1[2]`).
* `n∈N, x∈Z[1..n]`: The array size `n` is part of the input, and the array `x` is indexed from `1` to `n`.
* `x3∈N[1..]`: An array of natural numbers of some length, indexed from 1. The actual length is determined by the input data.

---

## **2. Post-Conditions ($\text{Post}:$)**

Post-conditions use logical and mathematical expressions to define what **must be true** after the operation is complete.

### **Logical Quantifiers**

| Example | Keywords | Description |
| :--- | :--- | :--- |
| `∀i∈[1..5]:(i>0)` | $\forall$ (forall) | **For all** $i$ in the set $[1..5]$, the statement is true. |
| `∃i∈[1..3]: (i=2)` | $\exists$ (exists) | **There exists** an $i$ in the set $[1..3]$ such that the statement is true. |

### **Array and Matrix Operations**

* **Statement on All Elements:** `∀i∈[1..n]: (x[i] > 10)`
* **Statement on At Least One Element:** `∃i∈[1..n]: (x[i] < 3)`
* **Using Length Function:** `∃i∈[1..len(x3)]:(x3[i]<3)`
* **Nested Quantifier (Matrix Example):** `∀i∈[1..8]:(∃j∈[1..8]:(m1[i,j]=10))`

### **Structuring Data**

* **Records (Structs):** Fields are referenced using dot notation: `r1.name="Victor" ∧ r1.grade=5`. (The symbol $\land$ is logical AND).
* **Tuples:** Elements are referenced by their number (1-indexed): `(3,5).1=3 ∧ (3,5).2=5`.
* **Array Equality:** Checks if two arrays are identical: `[1, 2, 3]=[1, 2, 3]`.