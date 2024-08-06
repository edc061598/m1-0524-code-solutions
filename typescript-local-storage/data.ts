/* exported todos */
interface Todo {
  todoId: string;
  task: string;
  isCompleted: boolean;
}
const $todos = document.querySelector('#todo-form');

let todos: Todo[] = readTodos();




function writeTodos(): void{
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('todos-storage', todosJSON);
}

function readTodos(): Todo[]{
  const getItems = localStorage.getItem('todos-storage');
  if(getItems !== null){
  return JSON.parse(getItems);
  } else {
    return [];
  }
}
