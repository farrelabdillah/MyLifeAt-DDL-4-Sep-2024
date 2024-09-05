document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get the username and password from the input fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        // Add fade-out effect to the login screen
        document.body.classList.add('fade-out');

        // Redirect to the home screen after the fade-out effect completes
        setTimeout(function() {
            window.location.href = 'home.html';
        }, 1000); 
    } else {
        alert('Please enter both username and password.');
    }
});