# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  The and operator evaluates operands from left to right returning the first falsy value it produces. If truthy, the last operand is returned. Or operators returns the value of one of the specified operands to determine if is true or false. They can be used by checking the variables themselves without needing to use an if statement and logging it to the console.
- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  Returns right hand side operand when its left hand side operand is null or undefined. Otherwise it returns the left hand side. Syntax errors will rise when you try to provide a default value to another variable.
- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  It uses a question mark to execute if the condition is truthy and is followed with a colon or if it is falsy. It is used as an alternative to an if else statement.
- What is the `?.` (optional chaining) operator? When would you use it?
  ?, instead of causing an error if a reference is nullish, the expression short circuits with a return value of undefined. You would use it for nested objects to determine if something is null or undefined.
- What is `...` (spread) syntax? How do you use it with arrays and objects?
  Enumerates the properties of an object and adds the key value pairs to the object being created. By calling the array or object and and adding the '...' followed by the variable name of the object or array.
- What data types can be spread into an array? Into an object?
  Primitives for objects. Array and string for array literals
- How does spread syntax differ from rest syntax?
  Spread expands an array into its elements, while rest syntax collects multiple elements and condenses them into a single element.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
