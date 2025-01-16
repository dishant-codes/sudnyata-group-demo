// Swiper for Image Slider (Screenshot Slider)
var swiper1 = new Swiper(".image-slider", {
  loop: true, // Loop the slider
  slidesPerView: 1, // Show one slide at a time
  spaceBetween: 10, // Space between slides
  autoplay: {
    delay: 3000, // Slide changes every 3 seconds
  },
  navigation: {
    nextEl: ".swiper-button-next", // Next button
    prevEl: ".swiper-button-prev", // Previous button
  },
});

// Swiper for Text Review Slider
var swiper2 = new Swiper(".text-slider", {
  loop: true, // Loop the slider
  slidesPerView: 1, // Show one slide at a time
  spaceBetween: 10, // Space between slides
  // Responsive breakpoints
  breakpoints: {
    // When window width is >= 768px (tablet and above)
    768: {
      slidesPerView: 2, // Show 2 slides on desktop
      spaceBetween: 20, // Increase space between slides
    },
  },
  autoplay: {
    delay: 4000, // Slide changes every 4 seconds
    disableOnInteraction: false, // Don't disable autoplay after user interaction
    pauseOnMouseEnter: true, // Pause autoplay on hover
  },
  navigation: {
    nextEl: ".swiper-button-next", // Next button
    prevEl: ".swiper-button-prev", // Previous button
  },
});

// Initialize AOS
AOS.init({
  duration: 1000,
  once: true,
});

// Elements
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const menuOpenIcon = document.getElementById("menu-open");
const menuCloseIcon = document.getElementById("menu-close");

// Toggle Function
menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  menuOpenIcon.classList.toggle("hidden");
  menuCloseIcon.classList.toggle("hidden");
});

// Custom Cursor
const cursor = document.getElementById("cursor");
const movingImage = document.getElementById("moving-image");
const container = document.getElementById("profile");
container.addEventListener("mousemove", (e) => {
  cursor.style.opacity = 1; // Show circle
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

// Image Moving Effect

container.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;

  // Adjust Image Position
  const xOffset = (window.innerWidth / 2 - clientX) / 30;
  const yOffset = (window.innerHeight / 2 - clientY) / 30;

  movingImage.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
});

// const dropdownToggle = document.getElementById("dropdownToggle");
// const dropdownMenu = document.getElementById("dropdownMenu");

// dropdownToggle.addEventListener("click", () => {
//   dropdownMenu.classList.toggle("hidden");
// });

// // Optional: Close dropdown if clicked outside
// document.addEventListener("click", (e) => {
//   if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
//     dropdownMenu.classList.add("hidden");
//   }
// });

// Set current year
const currentYearElement = document.getElementById("current_year");
const currentYear = new Date().getFullYear();
currentYearElement.textContent = currentYear;