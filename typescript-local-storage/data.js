"use strict";
const $todos = document.querySelector('#todo-form');
let todos = [];
function writeTodos() {
    const todosJSON = JSON.stringify(todos);
    localStorage.setItem('todos-storage', todosJSON);
}
function readTodos() {
    writeTodos();
    const getItems = localStorage.getItem('todos-storage');
    if (getItems !== null) {
        todos = JSON.parse(getItems);
    }
}
