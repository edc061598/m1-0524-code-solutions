const $buttonElement = document.querySelector('.click-button');
 if(!$buttonElement) throw new Error('$buttonElement does not exist');

function handleClick(event: Event): void{
  alert('Button clicked!');
  console.log('button clicked');
  console.log('event', event);
  console.log('event.target', event.target);
}

$buttonElement.addEventListener('click', handleClick);

const $buttonTwo = document.querySelector('.hover-button')
if(!$buttonTwo) throw new Error('$buttonTwo does not exist');
function handleMouseOver(event: Event): void{
  console.log('button hovered');
  console.log('event', event);
  console.log('event.target', event.target);
}

$buttonTwo.addEventListener('mouseover', handleMouseOver);


const $doubleClick = document.querySelector('.double-click-button');
if(!$doubleClick) throw new Error('$doubleClick does not exist');
function handleDoubleClick(event: Event): void{
  console.log('button double-clicked');
  console.log('event', event);
  console.log('event.target', event.target);
}

$doubleClick.addEventListener('double click', handleDoubleClick);
