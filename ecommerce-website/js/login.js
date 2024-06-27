
const form = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (localStorage.getItem('username') === username && localStorage.getItem('password') === password) {
        alert('Login successful!');
        window.location.href = 'dashboard.html';
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});