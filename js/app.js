document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the username and password from the input fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password); 

        // Redirect to the home screen
        window.location.href = 'home.html';
    } else {
        alert('Please enter both username and password.');
    }
});
