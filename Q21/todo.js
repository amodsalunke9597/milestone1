const todoInput = document.getElementById("todoInput");
const addButton = document.getElementById("addButton");
const todoList = document.getElementById("todoList");

let todos = [];

function renderTodos() {
  todoList.innerHTML = "";
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.innerText = `${index + 1}. ${todo}`;
    todoList.appendChild(li);
  });
}

function addTodo() {
  const todo = todoInput.value;
  if (todo !== "") {
    todos.push(todo);
    todoInput.value = "";
    renderTodos();
  }
}

addButton.addEventListener("click", addTodo);
