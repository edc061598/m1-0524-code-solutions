# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for?
  Creates a binding of a new async function to a given name. Await is premitted within the function body enabling asynchronous behavior
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  Async function will return a different reference and promise will return the same reference if the given value is a promise
- When do you use `async`?
  when you have many promises and want to chain them together
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  You use await if the caller needs to wait for the function to be done. You cannot use await when they are not asynchronous functions
- How do you handle errors with `await`?
  using a try/catch block
- What do `try`, `catch` and `throw` do? When do you use them?
  Try and catch handles the resolve and rejected cases for the promise functions. Throw creates a new error or value to the functions from try and catch.
- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  The function will run as is but the code will not wait until the function has resolved.
- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  I prefer async and await functions because of the try/catch methods and how simplistic the code is, in terms of logic.

## Notes

All student notes should be written here.
How to write `Code Examples` in markdown
for JS:

```javascript
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
