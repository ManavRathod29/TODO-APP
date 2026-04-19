const API = "http://localhost:5000/todos";

async function fetchTodos() {
  const res = await fetch(API);
  const todos = await res.json();

  const list = document.getElementById("todoList");
  list.innerHTML = "";

  todos.forEach(todo => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span style="text-decoration:${todo.completed ? 'line-through' : 'none'}">
        ${todo.text}
      </span>
      <button onclick="toggle('${todo._id}', ${todo.completed})">✔</button>
      <button onclick="deleteTodo('${todo._id}')">❌</button>
    `;

    list.appendChild(li);
  });
}

async function addTodo() {
  const input = document.getElementById("todoInput");

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: input.value })
  });

  input.value = "";
  fetchTodos();
}

async function toggle(id, completed) {
  await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed: !completed })
  });

  fetchTodos();
}

async function deleteTodo(id) {
  await fetch(`${API}/${id}`, {
    method: "DELETE"
  });

  fetchTodos();
}

fetchTodos();