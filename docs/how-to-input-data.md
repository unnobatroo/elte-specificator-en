# **How to input data**

The Specificator tool accepts data in various formats (JSON-like and YAML-like) that must precisely match the structure defined in your formal specification.

## 1. Array of Records (e.g., Student Data)

The main data structure often involves an array of records (objects), such as a `students` array, where each object holds defined keys (e.g., **name** and **grade**).

### JSON/List Format Example

This format uses square brackets and commas, common in JSON structures.

```json
students: [
    {name: "Álmos", grade: 3},
    {name: "Győző", grade: 5},
    {name: "Géza", grade: 4},
]
```

### YAML/Block Format Example

This format uses clear indentation and dashes, which can be more readable for complex or lengthy data sets.

```yaml
students:
    - name: Győző
      grade: 5
    - name: Álmos
      grade: 3
    - name: Géza
      grade: 2
```

## 2. Single Object and Elementary Values

Data for single variables is defined directly under the variable name.

### Single Student Object (s)

The variable `s` (for **student**) represents a single object, defining a name and a grade for one entry.

**YAML Format:**
```yaml
s:
  name: Győző
  grade: 5
```

**JSON Format:**
```json
s: {name: "Győző", grade:5}
```

**Logical (Boolean) Value**

A simple example defining a logical variable.

```yaml
included: true
```