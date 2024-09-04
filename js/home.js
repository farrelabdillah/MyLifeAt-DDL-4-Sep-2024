// Load the username from local storage and display it
const username = localStorage.getItem('username');
if (username) {
    document.getElementById('welcome-message').textContent = `Welcome, ${username}!`;
} else {
    // If no username is found in localStorage, redirect to login page
    window.location.href = 'login.html';
}

// Initialize an empty todo list (each todo will have a title and description)
let todos = [];

// Add event listener to the add button
document.getElementById('add-todo-button').addEventListener('click', function() {
    const todoTitleInput = document.getElementById('new-todo-title');
    const todoDescriptionInput = document.getElementById('new-todo-description');
    
    const todoTitle = todoTitleInput.value;
    const todoDescription = todoDescriptionInput.value;

    if (todoTitle && todoDescription) {
        // Push the new todo object (title and description) into the todos array
        todos.push({ title: todoTitle, description: todoDescription });
        renderTodoList();

        // Clear the input fields after adding the todo
        todoTitleInput.value = '';
        todoDescriptionInput.value = '';
    } else {
        alert('Please enter both title and description.');
    }
});

// Function to render the todo list
function renderTodoList() {
    const todoListElement = document.getElementById('todo-list');
    todoListElement.innerHTML = ''; // Clear the list before rendering

    // Iterate over todos and create elements for each todo
    todos.forEach(function(todo) {
        const li = document.createElement('li');

        // Create a title element and description element
        const titleElement = document.createElement('div');
        titleElement.classList.add('todo-title');
        titleElement.textContent = todo.title;

        const descriptionElement = document.createElement('div');
        descriptionElement.classList.add('todo-description');
        descriptionElement.textContent = todo.description;

        // Append title and description to the list item
        li.appendChild(titleElement);
        li.appendChild(descriptionElement);

        // Append the list item to the todo list
        todoListElement.appendChild(li);
    });
}

// Add event listener to the logout button
document.getElementById('logout-button').addEventListener('click', function() {
    // Clear the username and password from localStorage
    localStorage.removeItem('username');
    localStorage.removeItem('password');

    // Redirect to login page
    window.location.href = 'index.html';
});
