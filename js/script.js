const slideImages = document.querySelectorAll('.slideimg' );
let currentSlide = 0;

function showSlide(index) {
slideImages.forEach((image, i) => {
        if (i === index) {
            image.classList.add('active');
        } else {
            image.classList.remove('active');
        }
    });
}
function nextSlide() {
    currentSlide = (currentSlide + 1) % slideImages.length;
    showSlide(currentSlide);
}

//change slide every 3 seconds.
setInterval(nextSlide, 3000);

//to show the initial slide
showSlide(currentSlide);

//TEXT SLIDER----
const slides = document.querySelectorAll('.slide');
let currentSlide2 = 0;
function showSlideText(index) {
    
    slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }
    function nextText() {
        currentSlide = (currentSlide2 + 1) % slideImages.length;
        showSlideText(currentSlide2);
    }
    setInterval(nextText, 3000);
    showSlide(currentSlide2);




//Making the navbar's background change colour on scrolling.
const navbar = document.getElementById('navBar');
window.addEventListener('scroll', () =>{
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    }else{
        navbar.classList.remove('scrolled');
    }
});


//--------function---slide---replaced------
//     slides.forEach((slide)=>{
//         slide.classList.remove('active');
//     });
//     slides[index].classList.add('active');
// }