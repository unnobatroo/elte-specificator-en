# **How to write a specification**

## Input `In:`

### Elementary Sets

**Declaration: `data_name∈Set`.** `data_name` starts with a lowercase letter.
Declarations are separated by commas.

* `a∈N` - Set of Natural numbers, "a" is ONE value from the natural numbers. `a2 element of N` can also be used.
* `b∈Z` - Set of Integers.
* `c∈R` - Set of Real numbers.
* `d∈L` - Set of Logical (boolean) values.
* `e∈S` - Set of Strings.
* `f∈C`, `f2∈K` - Set of Characters.

### Intervals

* `iv1∈[1..3]` - `iv1`'s value can be between 1 and 3 (inclusive).

### Indexed Sequences, Arrays

Used for handling many elements of the same type.

* `x1∈N[1..3]` - Array of 3 natural numbers, with index range 1..3.
    * **Note:** `x1` is one element from the set of all possible 3-element sequences of natural numbers with a 1..3 index range. (Later, referencing an array element: e.g., `x1[2]`).
* `x2∈N[-1..1]` - Array of 3 natural numbers, with index range -1..1.
* `n∈N, x∈Z[1..n]` - Often, the array size is part of the input.
* `x3∈N[1..]` - Array of natural numbers of some length, indexed from 1. Its actual length is determined by the specific input and can be queried later with `length(x3)`.
* `x4∈N[0..]` - Same as above, but indexed from 0.
* `x5∈N[]` - Abbreviation, equivalent to `x5∈N[1..]`.
* `x6∈N[]=[5, 1, 2]` - Array with initial value (constant array).
* `x7∈N[2+3..n*2]` - The index range bounds can be simple expressions.

### Matrices

* `m1∈Z[1..8,1..8]` - 8x8 matrix. (Reference: e.g., `m1[3,6]`).
* `m2∈Z[1..n,1..n]` - nxn matrix.
* `m3∈Z[0..,0..]` - Matrix of some size, indexed from 0. The size is determined from the data.
* `m4∈Z[,]` - Equivalent to `m4∈Z[1..,1..]`.
* `m5∈Z[-1..1,-1..1] = [ [2, 1, 2], [1, 0, 1], [2, 1, 1] ]` - Matrix with initial value.

### Records (Structs, Objects)

Used for enclosing different types of values into a single unit.

* `r1∈name:S x grade:N` - A unit of a string (`name`) and a natural number (`grade`).
    * **Note:** `r1` takes one value from the Cartesian product set `S x N`. (Later, parts of the record can be referenced by field name: e.g., `r1.name`).
* `r2∈(name:S x grade:N)` - Sets after `∈` can be parenthesized.
* `r3∈(north:L x east:L x south:L x west:L)` - A more complex example.
* `r4∈(m1:[1..2] x m2:[3..4])` - `r4` will be one pair from the set `{(1,3), (1,4), (2,3), (2,4)}`.

### Custom Set Names (Types)

You can give any existing set another name.

**Format: `Set1=Set2`.** Custom set names start with a capital letter.

* `g∈Grade, Grade=[1..5]` - `Grade` is a custom name for the interval `[1..5]`.
* `g2∈Mark, Mark=OneToFive, OneToFive=[1..5]` - Long chains of renaming are possible.
* `s2∈Student[1..], Student=(name:S x grade:N)` - Used for clearer descriptions. This is more readable than `s1∈(name:S x grade:N)[1..]`.
* `s3∈StudentArray, StudentArray=Student2[], Student2=(name:S x grades:Grade[])` - Example where a student can have multiple grades (`Grade` defined above).
* `jaggedArray∈Row[], Row=N[]` - An array of variable-length arrays (jagged array).

## Auxiliary Data `Aux:`

Sometimes, intermediate auxiliary data is used to specify the output. These are defined here.

* `aux∈N` - Same comma-separated declaration format as for the input.

## Output `Out:`

* `out∈L` - Same comma-separated declaration format as for the input.
* `y∈N[]`

## Function Definitions `Fn:`

Custom functions can be defined by specifying the domain, codomain, and mapping rule.

* **`Fn:`** `f:N->N, f(p)=p*2`
    * A function `f` that maps a Natural number to a Natural number. `f(p)` returns `p*2` (doubler function).
* **`Fn:`** `square:Z->N, square(n)=n*n`
    * A function with a descriptive name (`square`).
* **`Fn:`** `add:Z x Z->Z, add(a,b)=a+b`
    * A function with multiple input parameters. (Note: spaces are needed before and after `x`).
* **`Fn:`** `swap:Z x Z->Z x Z, swap(a, b)=(b, a)`
    * A function that returns a tuple (`swap`).
* **`Fn:`** `f2:Z -> Z, f2(p)=p+n`
    * Functions have access to declared variables (like `n`), unless a parameter shadows the name.
* **`Fn:`** `getGrade:Student->N, getGrade(s)=s.grade`
    * A function that takes a Record as a parameter.
* **`Fn:`** `index:N[] x N->N, index(x,i)=x[i]`
    * A function that takes an Array as a parameter.

## Preconditions `Pre:`

The precondition is a logical expression concerning the input data. The program is only meaningful to execute if this expression is **true**. It uses standard logical (`and`, `or`, `not`), comparison (`=`, `<`, `>`), and first-order logic (`∀` - forall, `∃` - exists) operators.

* `true` - The simplest precondition (can also be written as `Pre: -`).
* `not false`
* `n>0` - We can reference data declared in the input.
* `(3<4 or ((3)>4))` - Arbitrary nesting of parentheses.
* `(true -> true)` - Implication, which is only false if `true` implies `false`.
* `not(true -> false)` - This is `not(false)`, which is `true`.
* `∀i∈[1..3]:(i>0)` - **For all** `i` in the set `[1..3]`, the statement `(i>0)` is true. (The keyword `forall` can also be used).
* `∀i∈[1..n]:(x[i]>10)` - A statement about all elements in an array.
* `∃i∈[1..3]:(i=2)` - **There exists** an `i` in the set `[1..3]` such that the statement `(i=2)` is true. (The keyword `exists` can also be used).
* `∃i∈[1..n]:(x[i]<3)` - States that at least one element in array `x` is less than 3.
* `∃i∈[1..length(x3)]:(x3[i]<3)` - Using the `length()` function if the array's end index wasn't declared.
* `∃i∈[from(x3)..to(x3)]:(x3[i]<3)` - Index range can also be queried with `from()` and `to()`.
* `∀i∈[1..8]:(∃j∈[1..8]:(m1[i,j]=10))` - A nested example for a matrix: "For every row `i`, there exists a column `j` such that the element `m1[i,j]` is 10."
* `r1.name="Victor" and r1.grade=5` - Referencing fields in a record.
* `(3, 5).1=3 and (3, 5).2=5` - Tuples can be used and elements are referenced by number.
* `[1, 2, 3]=[1, 2, 3]` - Array literals (rare).
* `[0..:1, 2, 3]=[0..:1, 2, 3]` - Array literal with an index range.
* `[[1, 2], [3, 4]]=[1..,1..:[1, 2], [3, 4]]` - Matrix literal with an index range.

## Postconditions `Post:`

The postcondition is the most important part of the specification. It is a logical statement that describes the relationship between the **input and output data**. It is **true** if, for a valid input (one that satisfies the `Pre:`), the program produces the correct output.

* `true` - (The description is omitted here as it wouldn't be meaningful without a specific problem).