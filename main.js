// template_4428hz6
// service_1yachsv
// wGSkAvoxM_J34F_B9
//



let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event){
    const shapes = document.querySelectorAll(".shape"); // querySelectorAll returns an Array
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for(let i = 0; i < shapes.length; ++i){
        const isOdd = i % 2 !== 0;
        const booleanInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * booleanInt}px, ${y * booleanInt}px) ` 
    }
}

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if(contrastToggle){
        document.body.classList += " dark-theme"
    }else{
        document.body.classList.remove("dark-theme")
    }
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible"
    emailjs
    .sendForm(
        'service_1yachsv',
        'template_k99j6vk',
        event.target,
        'wGSkAvoxM_J34F_B9'
    ).then(() => {

        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
        
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is temporarily unavailable. Please contact me directly on ExoPolit@gmx.de"
        )
    })
}
function toggleModal() {
    if(isModalOpen){
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}



// SLIDESHOW

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// Hamburger

function openMenu() {
    document.body.classList += " menu--open"
}

function closeMenu() {
    document.body.classList.remove ('menu--open')
}
