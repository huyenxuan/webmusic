// animation
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
})
loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
})

// hide & unhide pass
function togglePasswordVisibility() {
    const toggleButtons = document.querySelectorAll('.toggle-password');
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const passwordField = button.previousElementSibling;
            if (passwordField.getAttribute("type") === "password") {
                passwordField.setAttribute("type", "text");
                button.className = "toggle-password fa-solid fa-eye-slash";
            } else {
                passwordField.setAttribute("type", "password");
                button.className = "toggle-password fa-solid fa-eye";
            }
        });
    });
}

togglePasswordVisibility();

