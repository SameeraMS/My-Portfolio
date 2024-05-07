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
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    })
})
const hiddenElements = document.querySelectorAll('.hidden-left, .hidden-right, .hidden-top, .hidden-bottom');
hiddenElements.forEach((e1)=>observer.observe(e1));


//
/*document.addEventListener('DOMContentLoaded', function() {
    const hoverSection = document.querySelectorAll('.hover-section');
    const hoverImage = document.querySelectorAll('.hover-image');

    hoverSection.forEach((section, index) => {
        const hoverImages = hoverImage[index];

        section.addEventListener('mousemove', (e) => {
            const xOffset = 20; // Adjust this value to set the distance from the mouse pointer
            const yOffset = 20; // Adjust this value to set the distance from the mouse pointer
            hoverImages.style.left = e.pageX + xOffset + 'px';
            hoverImages.style.top = e.pageY + yOffset + 'px';
        });
    });
});*/



//rotate gallery
const $carousel = document.querySelector('.carousel');
const cellCount = 9;
let currentIndex =0;

function rotateCarousel(){
    const angle = currentIndex/cellCount * -360;

    $carousel.style.transform = `translateZ(288px) rotateY(${angle}deg)`;
}

setInterval(
    () => {
        rotateCarousel();
        currentIndex++;
    },
    1500,
)
