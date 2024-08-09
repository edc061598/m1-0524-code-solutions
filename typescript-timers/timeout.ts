const $message = document.querySelector('.message');
if (!$message) throw new Error('$message does not exist');

setTimeout(function helloWorld() {
  $message.textContent = 'HELLO THERE';
}, 2000);
