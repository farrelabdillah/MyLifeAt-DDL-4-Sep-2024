// Load the username from local storage and display it
const username = localStorage.getItem("username");
if (username) {
  document.querySelector(".username-text").textContent = username;
} else {
  // If no username is found in localStorage, redirect to login page
  window.location.href = "login.html";
}

// Initialize an empty todo list (each todo will have a title, description, date, and time)
let todos = [];

// Add event listener to the add button
document
  .getElementById("add-todo-button")
  .addEventListener("click", function () {
    const todoTitleInput = document.getElementById("todo-title");
    const todoDescriptionInput = document.getElementById("todo-description");

    const todoTitle = todoTitleInput.value;
    const todoDescription = todoDescriptionInput.value;

    // Get today's date and time from the device
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0]; // Format: YYYY-MM-DD
    const formattedTime = today.toTimeString().split(" ")[0].slice(0, 5); // Format: HH:MM

    if (todoTitle && todoDescription) {
      // Push the todo object (title, description, date, and time) into the todos array
      todos.push({
        title: todoTitle,
        description: todoDescription,
        date: formattedDate,
        time: formattedTime,
      });
      renderTodoList();

      // Clear the input fields after adding the todo
      todoTitleInput.value = "";
      todoDescriptionInput.value = "";
    } else {
      alert("Please fill in all the fields.");
    }
  });

// Function to render the todo list
function renderTodoList() {
  const todoListElement = document.getElementById("todo-list");
  todoListElement.innerHTML = ""; // Clear the list before rendering

  // Iterate over todos and create elements for each todo
  todos.forEach(function (todo) {
    const li = document.createElement("li");

    // Create elements for title, description, date, and time
    const titleElement = document.createElement("div");
    titleElement.classList.add("todo-title");
    titleElement.textContent = todo.title;

    const descriptionElement = document.createElement("div");
    descriptionElement.classList.add("todo-description");
    descriptionElement.textContent = todo.description;

    const dateElement = document.createElement("div");
    dateElement.classList.add("todo-date");
    dateElement.textContent = `Date: ${todo.date}`;

    const timeElement = document.createElement("div");
    timeElement.classList.add("todo-time");
    timeElement.textContent = `Time: ${todo.time}`;

    // Append title, description, date, and time to the list item
    li.appendChild(titleElement);
    li.appendChild(descriptionElement);
    li.appendChild(dateElement);
    li.appendChild(timeElement);

    // Append the list item to the todo list
    todoListElement.appendChild(li);
  });
}

// Add event listener to the logout button
document.getElementById("logout-button").addEventListener("click", function () {
  // Clear the username and password from localStorage
  localStorage.removeItem("username");
  localStorage.removeItem("password");

  // Redirect to login page
  window.location.href = "index.html";
});

// Add fade-in effect when the home page loads
window.onload = function () {
  document.body.classList.add("fade-in");
};
