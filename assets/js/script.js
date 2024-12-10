"use strict";

/**
 * add event listener on multiple elements
 */

// const lenis = new Lenis({
//   autoRaf: true,
// });

// // Listen for the scroll event and log the event data
// lenis.on('scroll', (e) => {
//   console.log(e);
// });

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};


/**
 * MOBILE NAVBAR TOGGLE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

addEventOnElements(navTogglers, "click", toggleNav);

const cartModal = document.querySelector("[data-cart-modal]");
const cartTogglers = document.querySelectorAll("[data-cart-toggler]");

const toggleCartModal = function () {
  cartModal.classList.toggle("active");
  overlay.classList.toggle("active");
};

addEventOnElements(cartTogglers, "click", toggleCartModal);

// Update the JavaScript code to include the correct selectors and logic

const addToCartButtons = document.querySelectorAll(".add-cart");
const cartItemsList = document.querySelector(".cart-items");
const cartIcon = document.querySelector(".cart");

let cartItemCount = 0;

const addToCart = function (serviceName, price) {
  const cartItem = document.createElement("li");
  cartItem.innerHTML = `
    <span>${serviceName}</span>
    <span class="item-price">$${price}</span>
  `;
  cartItemsList.appendChild(cartItem);

  cartItemCount++;
  updateCartIcon();
};

const updateCartIcon = function () {
  cartIcon.innerHTML = `<ion-icon name="cart-outline" class="cart"></ion-icon>${cartItemCount}`;
};

addEventOnElements(addToCartButtons, "click", function () {
  const serviceName = this.closest("[data-filter]").dataset.serviceName;
  const price = this.closest("[data-filter]").dataset.price;

  addToCart(serviceName, price);
});

/**
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

const headerActive = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

window.addEventListener("scroll", headerActive);

/**
 * filter function
 */

const filterBtns = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter]");

let lastClickedFilterBtn = filterBtns[0];

const filter = function () {
  lastClickedFilterBtn.classList.remove("active");
  this.classList.add("active");
  lastClickedFilterBtn = this;

  for (let i = 0; i < filterItems.length; i++) {
    if (
      this.dataset.filterBtn === filterItems[i].dataset.filter ||
      this.dataset.filterBtn === "all"
    ) {
      filterItems[i].style.display = "block";
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].style.display = "none";
      filterItems[i].classList.remove("active");
    }
  }
};

addEventOnElements(filterBtns, "click", filter);


// Function to open the popup overlay
function openPopup() {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
}

// Function to close the popup overlay
function closePopup() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  const playButton = document.getElementById("playButton");
  const modal = document.getElementById("videoModal");
  const closeModal = document.querySelector(".close");
  const videoPlayer = document.getElementById("videoPlayer");

  playButton.addEventListener("click", () => {
    modal.style.display = "flex"; 
    videoPlayer.play(); 
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";  
    videoPlayer.pause();  
    videoPlayer.currentTime = 0; 
  });

  // Close modal when clicking outside the content
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      videoPlayer.pause();
      videoPlayer.currentTime = 0;
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Initialize ScrollReveal
  const sr = ScrollReveal({
    distance: '50px', // How far elements move
    duration: 1000, // Animation duration (milliseconds)
    easing: 'ease-in-out', // Easing function
    reset: false, // Animations occur only once (set to true for repeat animations)
  });

  // Hero Section Animation
  sr.reveal('.hero-content', { 
    origin: 'bottom', 
    delay: 300 
  });

  // About Section Animation
  sr.reveal('.about-content', { 
    origin: 'bottom', 
    delay: 400 
  });
  sr.reveal('.about-images', { 
    origin: 'bottom', 
    delay: 500 
  });

  // Feature Section Animations
  sr.reveal('.from-left', { 
    origin: 'left', 
    delay: 200 
  });

  sr.reveal('.from-right', { 
    origin: 'right', 
    delay: 200 
  });

  sr.reveal('.from-top', { 
    origin: 'top', 
    delay: 200 
  });

  sr.reveal('.from-bottom', { 
    origin: 'bottom', 
    delay: 200 
  });
});


