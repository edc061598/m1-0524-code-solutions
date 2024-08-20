# fetch-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What does `fetch()` return?
  Returns a promise that resolves to the Response object representing the outcome of the request.
- What is the default request method used by `fetch()`?
  GET method. If no method is specified.
- How do you specify the request method (`GET`, `POST`, etc.) when calling `fetch`?
  Pass an options object as the second argument to fetch(), setting method property to GET, POST, PUT, DELETE, etc.
- How does `fetch` report errors?
  Considers a promise resolved even if server responds with an error status code. Rejects promise on network failures. HTTP errors, check with the response.ok property or the status code directly within the response handling logic.

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
