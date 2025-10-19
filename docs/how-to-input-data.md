# **How to input data**

## Student Data Specification

The main data is represented by the `students` array, which holds objects for individual students. Each student object uses the keys **name** and **grade**.

### JSON-like Format

List-based declaration for the student data.

```
students: [
    {name: "Álmos", grade: 3},
    {name: "Győző", grade: 5},
    {name: "Géza", grade: 4},
]
```

### YAML-like Format

Structure the same data using a more traditional YAML block format.

```
students:
    - name: Győző
      grade: 5
    - name: Álmos
      grade: 3
    - name: Géza
      grade: 2
```

## Single Student Object

The variable `s` (for **student**) represents a single object, defining a name and a grade for one entry.

### YAML Format

Definition for the single student object.

```
s:
  name: Győző
  grade: 5
```

### JSON Format

Equivalent structure shown in a JSON format.

```
s: {name: "Győző", grade:5}
```

### Boolean Value

A simple logical (Boolean) variable that is set to true.

```
included: true
```