'use strict';
const $handleFocus = document.querySelector('input');
if (!$handleFocus) throw new Error('$input does not exist');
const $handleBlur = document.querySelector('input');
if (!handleBlur) throw new Error('$input does not exist');
const $handleInput = document.querySelector('input');
if (!handleInput) throw new Error('$input does not exist');
function handleFocus(event) {
  console.log('focus event was fired ');
  const $eventTarget = event.target;
  console.log('event.target.name ', $eventTarget.name);
}
function handleBlur(event) {
  console.log('blur event was fired');
  const $eventTarget = event.target;
  console.log('event.target.name ', $eventTarget.name);
}
function handleInput(event) {
  const $eventTarget = event.target;
  console.log('value of name: ', $eventTarget.value);
}
$handleFocus.addEventListener('focus', handleFocus);
$handleBlur?.addEventListener('blur', handleBlur);
$handleInput?.addEventListener('input', handleInput);
