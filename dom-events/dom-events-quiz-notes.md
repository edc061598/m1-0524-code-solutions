# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  to display information, test code or debug errors
- What is the purpose of events and event handling?
  Creating interactive and dynamic web applications. Respond to user actions or interactions with a web page.
- Are all possible parameters required to use a JavaScript method or function?
  You will need the query selector, and a variable assigned to it.
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  The addEventListener method is used to be called when a specific type of event occurs.
- What is a callback function?
  functions passed into another function as an argument
- What object is passed into an event listener callback when the event fires?
  addEventListener method is used
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  Event.target refers to the element responsible for firing the event. It will print the HTML representation of an element.
- What is the difference between these two snippets of code?
  ````js
  element.addEventListener('click', handleClick);
  ``` The callback function is not being called
  ```js
  element.addEventListener('click', handleClick());
  ```the callback function is being called
  ````

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
