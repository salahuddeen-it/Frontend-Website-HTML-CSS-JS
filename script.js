// HERO BUTTON

const heroBtn = document.getElementById("heroBtn");

if(heroBtn){

  heroBtn.addEventListener("click", function(){

    alert("Welcome to Frontend Development!");

  });

}


// MOBILE MENU

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

if(menuToggle){

  menuToggle.addEventListener("click", function(){

    navLinks.classList.toggle("active");

  });

}

// ACTIVE NAVBAR

const currentPage = window.location.pathname.split("/").pop();

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(link => {

  if(link.getAttribute("href") === currentPage){

    link.classList.add("active");

  }

});


// ACTIVE NAVBAR FOR ABOUT & CONTACT SECTIONS

const sectionLinks = document.querySelectorAll(
  '.nav-links a[href^="#"]'
);

sectionLinks.forEach(link => {

  link.addEventListener("click", function(){

    navItems.forEach(item => {
      item.classList.remove("active");
    });

    this.classList.add("active");

  });

});


// SMOOTH SLIDER (WORKS ON ALL PAGES)

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

// INITIAL STATE FIX
if (slides.length > 0 && dots.length > 0) {
  slides.forEach((s, i) => {
    s.classList.remove("active");
    dots[i].classList.remove("active-dot");
  });

  slides[0].classList.add("active");
  dots[0].classList.add("active-dot");
}

setInterval(() => {

  // remove old
  slides[currentSlide].classList.remove("active");
  dots[currentSlide].classList.remove("active-dot");

  // next slide
  currentSlide++;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  // add new
  slides[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active-dot");

}, 3000);

// DYNAMIC FEATURE CARDS (ONLY HOMEPAGE)

const featuresContainer = document.getElementById("featuresContainer");

if(featuresContainer){

  const features = [

    {
      title:"Responsive Design",
      text:"Works perfectly on all devices."
    },

    {
      title:"Smooth Animations",
      text:"Modern transitions and effects."
    },

    {
      title:"Interactive Features",
      text:"JavaScript powered functionality."
    }

  ];

  features.forEach(function(feature){

    featuresContainer.innerHTML += `

      <div class="card">

        <h3>${feature.title}</h3>

        <p>${feature.text}</p>

      </div>

    `;

  });

}


// FORM VALIDATION

const contactForm = document.getElementById("contactForm");

if(contactForm){

  contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value.trim();

    let email = document.getElementById("email").value.trim();

    let message = document.getElementById("message").value.trim();

    if(name === "" || email === "" || message === ""){

      alert("Please fill all fields!");

      return;

    }

    if(!email.includes("@")){

      alert("Please enter a valid email!");

      return;

    }

    alert("Form submitted successfully!");

  });

}

// TYPING EFFECT

const typingText = document.getElementById("typingText");

const text = "Frontend Development Best Practices";

let index = 0;

function typeEffect(){

  if(index < text.length){

    typingText.innerHTML += text.charAt(index);

    index++;

    setTimeout(typeEffect,40);

  }

}

if(typingText){

  typeEffect();

}


// SCROLL REVEAL

const revealElements = document.querySelectorAll(".card, .contact");

window.addEventListener("scroll", function(){

  revealElements.forEach(element => {

    const position = element.getBoundingClientRect().top;

    const screenHeight = window.innerHeight;

    if(position < screenHeight - 100){

      element.classList.add("show");

    }

  });

});

// SCROLL NAVBAR EFFECT

window.addEventListener("scroll", function(){

  const navbar = document.querySelector(".navbar");

  if(window.scrollY > 50){
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

});