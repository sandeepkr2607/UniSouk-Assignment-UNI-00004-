document.querySelector('.hamburger').addEventListener('click', function () {
  document.querySelector('.nav-menu').classList.add('active');
});

document.querySelector('.close-btn').addEventListener('click', function () {
  document.querySelector('.nav-menu').classList.remove('active');
});

// Carousel functionality
const track = document.querySelector('.client-logos');
const logos = document.querySelectorAll('.client-logo');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
const carousel = document.querySelector('.carousel');
let currentIndex = 0;
let autoScrollInterval;

const logoWidth = logos[0].clientWidth + 40; // Width of logo + gap
const visibleLogos = 4; // Number of logos visible at a time

function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * logoWidth}px)`;
}

function startAutoScroll() {
  autoScrollInterval = setInterval(() => {
    currentIndex++;
    if (currentIndex > logos.length - visibleLogos) {
      currentIndex = 0; // Loop back to start
    }
    updateCarousel();
  }, 3000); // Auto-scroll every 3 seconds
}

function stopAutoScroll() {
  clearInterval(autoScrollInterval);
}

nextBtn.addEventListener('click', function () {
  currentIndex++;
  if (currentIndex > logos.length - visibleLogos) {
    currentIndex = 0; // Loop back to start
  }
  updateCarousel();
});

prevBtn.addEventListener('click', function () {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = logos.length - visibleLogos; // Loop to end
  }
  updateCarousel();
});

// Start auto-scrolling when the page loads
startAutoScroll();

// Pause auto-scroll on hover
carousel.addEventListener('mouseenter', stopAutoScroll);
carousel.addEventListener('mouseleave', startAutoScroll);
