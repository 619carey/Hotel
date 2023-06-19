//Carousel functionality
const carouselSlides = document.querySelectorAll('#carousel-slides');
const carouselPrev = document.querySelector('.carousel-prev');
const carouselNext = document.querySelector('.carousel-next');

let currentSlide = 0;

function showSlide(slideIndex) {
    carouselSlides.forEach((slide) => {
        slide.classList.remove('active');
    });

    carouselSlides[slideIndex].classList.add('active');
}

function goToPreviousSlide(){
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = carouselSlides.length -1;
    }
    showSlide(currentSlide);
}

function goToNextSlide(){
    currentSlide++;
    if (currentSlide >= carouselSlides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

carouselPrev.addEventListener('click', goToPreviousSlide);
carouselNext.addEventListener('click', goToNextSlide);

//form submission functionality
const contact = document.getElementById('contact-form');

contact.addEventListener('submit' , function(event) {
    event.preventDefault();

    //get input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    //logging form details into console
    console.log('Name:' , name);
    console.log('Email:' , email);
    console.log('Phone:' , phone);
    console.log('Message:' , message);

    //show an alert and clear form fields
    alert('Message Delivered Successfully.');
    contact.reset(); 
});