//cursor
const cursor = document.querySelector("#cursor");
document.addEventListener("mousemove", function (e){
        cursor.style.top = `${e.clientY - cursor.offsetHeight/2}px`;
        cursor.style.left = `${e.clientX - cursor.offsetWidth/2}px`;

})


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

//scrolling
window.addEventListener('scroll', function() {
    var scrollingPage = document.querySelector('.scrolling-page');
    var scrollPosition = window.scrollY;

    // Add 'open' class when the user scrolls to reveal the scrolling page
    if (scrollPosition > 100) { // Adjust this value based on your needs
        scrollingPage.classList.add('open');
    } else {
        scrollingPage.classList.remove('open');
    }
});



//animation
const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    })
})
const hiddenElements = document.querySelectorAll('.hidden-left, .hidden-right, .hidden-top, .hidden-bottom');
hiddenElements.forEach((e1)=>observer.observe(e1));



const hoverTarget = document.querySelector('.hover-target');
const hoverImage = document.querySelector('.hover-image');

hoverTarget.addEventListener('mousemove', (e) => {
    const xOffset = 20; // Adjust this value to set the distance from the mouse pointer
    const yOffset = 20; // Adjust this value to set the distance from the mouse pointer
    hoverImage.style.left = e.pageX + xOffset + 'px';
    hoverImage.style.top = e.pageY + yOffset + 'px';
});
