# dom-event-delegation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?
  The element that was interacted with
- Why is it possible to listen for events on one element that actually happen its descendent elements?
  It is bubbling through the ancestors in the DOM hierarchy.
- What DOM element property tells you what type of element it is?
  the tagname method
- What does the `element.closest()` method take as its argument and what does it return?
  string of valid CSS selector and its ancestors against
- How can you remove an element from the DOM?
  The remove method
- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  You would do event capturing that would capture all of the elements that would happen inside of the DOM. So long as the propagation is not stopped.

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
