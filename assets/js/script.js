var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000, /* 3-second delay */
      disableOnInteraction: false, /* Continue autoplay even after user interaction */
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
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



  // Hide cursor when mouse leaves the image
  container.addEventListener("mouseleave", () => {
    cursor.style.opacity = 0; // Hide circle
    movingImage.style.transform = "translate(0, 0)";
  });




  const dropdownToggle = document.getElementById('dropdownToggle');
  const dropdownMenu = document.getElementById('dropdownMenu');

  dropdownToggle.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');
  });

  // Optional: Close dropdown if clicked outside
  document.addEventListener('click', (e) => {
    if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownMenu.classList.add('hidden');
    }
  });
