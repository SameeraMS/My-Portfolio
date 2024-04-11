//menu button
const menuBtn = document.querySelector('.menu-btn');
const navToggle = document.querySelector('.navbar');
const navContainer = document.querySelector('header');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    navToggle.classList.toggle('active');
    navContainer.classList.toggle('active');
});


//mode change
const checkbox = document.getElementById('mode-check');

checkbox.addEventListener('click',() => {
    document.body.classList.toggle('light');
});

//typing animation
document.addEventListener("DOMContentLoaded", function() {
    const typed = new Typed('.typing', {
        strings: ["Software Engineer..", "Full Stack Developer..", "UI/UX Designer..", "Web Developer.."],
        typeSpeed: 60,
        backSpeed: 30,
        backDelay: 600,
        loop: true
    });
});

//gallery scale animation
function toggleScale(element) {
    var images = document.querySelectorAll('.gallery-box');
    images.forEach(function(img) {
        if (img !== element) {
            img.classList.remove('scaled'); // Collapse other images
        }
    });
    element.classList.toggle('scaled'); // Toggle the 'scaled' class for the clicked image
}