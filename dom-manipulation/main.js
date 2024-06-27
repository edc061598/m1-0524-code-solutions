'use strict';
const $hotButton = document.querySelector('.hot-button.cold');
const $clickCount = document.querySelector('.click-count');
if (!$hotButton) throw new Error('$hotButton does not exist');
let click = 0;
function clickButton() {
  click++;
  if (click < 4) {
    $hotButton.className = 'hot-button cold';
    $clickCount.textContent = 'Clicks: ' + click;
  } else if (click < 7 && click >= 4) {
    $hotButton.className = 'hot-button cool';
    $clickCount.textContent = 'Clicks: ' + click;
  } else if (click < 10 && click >= 7) {
    $hotButton.className = 'hot-button tepid';
    $clickCount.textContent = 'Clicks: ' + click;
  } else if (click < 13 && click >= 10) {
    $hotButton.className = 'hot-button warm';
    $clickCount.textContent = 'Clicks: ' + click;
  } else if (click >= 13 && click < 16) {
    $hotButton.className = 'hot-button hot';
    $clickCount.textContent = 'Clicks: ' + click;
  } else if (click >= 16) {
    $hotButton.className = 'hot-button nuclear';
    $clickCount.textContent = 'Clicks: ' + click;
  }
  if (!$hotButton || !$clickCount)
    throw new Error('hotbutton and click count query failed');
}
$hotButton.addEventListener('click', clickButton);
