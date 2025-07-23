// JavaScript to toggle the menu
document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelector('.menu'); // Select the menu container
    const toggleButton = document.querySelector('.menu-toggle'); // Select the toggle button

    if (toggleButton) {
        toggleButton.addEventListener('click', function () {
            menu.classList.toggle('active'); // Toggle the "active" class
        });
    }
});