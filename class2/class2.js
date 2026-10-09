const todos = [];

function add() {
  const todoInputValue = document.getElementById("todo-input").value;
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";
  
  const newTodo = {
    title: todoInputValue,
  };

  todos.push(newTodo);

  todos.forEach((todo) => {
    todoList.innerHTML += `<li class='todo-item'><span>${todo.title}</span><button onclick="complete()">Complete</button></li>`;
  });
}
