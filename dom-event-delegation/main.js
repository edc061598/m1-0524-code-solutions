'use strict';
const $taskList = document.querySelector('.task-list');
if (!$taskList) throw new Error('task-list query failed');
const eventTarget = document.querySelector('.task-list');
if (!eventTarget) throw new Error('eventTarget failed');
const $closest = document.querySelector('.task-list-item');
if (!$closest) throw new Error('did not work');
function taskListEvent(event) {
  const $taskList = event;
  console.log($taskList);
  const eventTarget = event.target;
  console.log('event.target', eventTarget);
  console.log(eventTarget.closest('span'));
  console.log('event.target.tagName: ', eventTarget.tagName);
  const $closest = eventTarget.closest('.task-list-item');
  console.log('button', $closest);
  $closest?.remove();
}
$taskList.addEventListener('click', taskListEvent);
console.log($taskList);
eventTarget.addEventListener('change', taskListEvent);
console.log(eventTarget);
$closest.addEventListener('remove', taskListEvent);
console.log($closest);
