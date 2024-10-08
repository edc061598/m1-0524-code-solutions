# typescript-promises-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the Event Queue model of Promises?
  Callback functions associated with asynchronous operations are placed into a queue when the operations complete. Runtime environment has an event loop that continuously checks this queue and processes the callbacks in the order they arrive.
- What are the three states a Promise can be in?
  Pending, fulfilled and rejected
- How do you handle the fulfillment of a Promise?
  using the .then() method to the promise.
- How do you handle the rejection of a Promise?
  using the .catch() method to the promise

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