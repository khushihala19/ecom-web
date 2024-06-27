
function signup() {
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;
    const cpassword = document.getElementById('confirmpassword').value;

    if (username && password && cpassword) {
        const user = {
            username: username,
            password: password,
            cpassword:cpassword
        };
        localStorage.setItem(username, JSON.stringify(user));
        alert('Signup successful!');
        window.location.href='home.html';
    } else {
        alert('Please fill all fields.');
    }
}