const $bulb = document.querySelector('.bulb-on');
if (!$bulb) throw new Error('$bulb does not exist');

const $container = document.querySelector('.container-on');
if (!$container) throw new Error('$container does not exist');
let click: number = 0;
function lightBulb(): void {
  click++;
  if (click % 2 !== 0) {
    $bulb.className = 'bulb-off';
    $container.className = 'container-off';
  } else {
    $bulb.className = 'bulb-on';
    $container.className = 'container-on';
  }
}

$bulb.addEventListener('click', lightBulb);
