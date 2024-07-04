const $handleFocus = document.querySelector('input');
if (!$handleFocus) throw new Error('$input does not exist');

const $handleBlur = document.querySelector('input');
if (!handleBlur) throw new Error('$input does not exist');

const $handleInput = document.querySelector('input');
if (!handleInput) throw new Error('$input does not exist');

function handleFocus(event: Event): void {
  console.log('focus event was fired ');
  const $eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log('event.target.name ', $eventTarget.name);
}

function handleBlur(event: Event): void {
  console.log('blur event was fired');
  const $eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log('event.target.name ', $eventTarget.name);
}

function handleInput(event: Event): void {
  const $eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log('value of name: ', $eventTarget.value);
}

$handleFocus.addEventListener('focus', handleFocus);
$handleBlur?.addEventListener('blur', handleBlur);
$handleInput?.addEventListener('input', handleInput);
