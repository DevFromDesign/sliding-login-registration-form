// Get the buttons and forms
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const loginForm = document.querySelector('.login-box');
const signupForm = document.querySelector('.signup-box');
const slider = document.getElementById('slider');

// Function to switch to the Login Form
loginBtn.addEventListener('click', () => {
    loginForm.classList.add('active-form');
    signupForm.classList.remove('active-form');
    slider.style.left = '0'; // Move slider to the left
});

// Function to switch to the Signup Form
signupBtn.addEventListener('click', () => {
    signupForm.classList.add('active-form');
    loginForm.classList.remove('active-form');
    slider.style.left = '50%'; // Move slider to the right
});
