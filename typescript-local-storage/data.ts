/* exported todos */
interface Todo {
  todoId: string;
  task: string;
  isCompleted: boolean;
}
const $todos = document.querySelector('#todo-form');

let todos: Todo[] = [

];




function writeTodos(): void{
  const todosJSON = JSON.stringify(todos);
  localStorage.setItem('todos-storage', todosJSON);
}

function readTodos(): void{
  writeTodos();
  const getItems = localStorage.getItem('todos-storage');
  if(getItems !== null){
  todos = JSON.parse(getItems);
  }
}

writeTodos();
readTodos();
