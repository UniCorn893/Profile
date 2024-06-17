// Array of user objects with username and password
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    { username: 'user3', password: 'password3' },
    { username: 'user4', password: 'password4' },
    { username: 'user5', password: 'password5' },
    { username: 'user6', password: 'password6' },
    { username: 'user7', password: 'password7' },
    { username: 'user8', password: 'password8' },
    { username: 'user9', password: 'password9' },
    { username: 'user10', password: 'password10' },
    { username: 'user11', password: 'password11' },
    { username: 'user12', password: 'password12' },
    { username: 'user13', password: 'password13' },
    { username: 'user14', password: 'password14' },
    { username: 'user15', password: 'password15' }
];

// Function to handle form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the entered credentials match any user in the users array
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Redirect to the index page upon successful login
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password');
    }
});
