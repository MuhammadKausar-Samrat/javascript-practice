# Problem: Day Type Checker

Write a function `getDayType` that takes a day name and returns:

| Input Day | Returns |
|-----------|---------|
| Friday, Saturday | "Weekend" |
| Sunday, Monday, Tuesday, Wednesday, Thursday | "Working Day" |
| Anything else | "Invalid Day" |

### Example

| Function Call | Returns |
|---------------|---------|
| `getDayType("Friday")` | "Weekend" |
| `getDayType("friday")` | "Weekend" |
| `getDayType("MONDAY")` | "Working Day" |
| `getDayType("Bandarban")` | "Invalid Day" |

### Requirements
- You must use `switch case`, not `if / else`.
- The function must work regardless of letter case.

### Hint
Two `case` statements can share one result if there is no `break` between them. Use a string method to handle different letter cases before the `switch` statement.
