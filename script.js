// Date
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile Navigation
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

const awayMessages = [
  "Definitely doing work...",
  "Not watching anime, promise.",
  "Looking Busy...",
];

const returnMessages = [
  "Oh hey, didn't hear you come back.",
  "Acting natural...",
  "pretending to work.",
  "You saw nothing. 😅",
  "👀 Back so soon?",
  "Ah yes... where were we?",
];

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    document.title = awayMessages[Math.floor(Math.random() * awayMessages.length)];
  } else {
    document.title = returnMessages[Math.floor(Math.random() * returnMessages.length)];
    setTimeout(() => {
      document.title = "Imoh Bassey || Software Engineer";
    }, 2000);
  }
});

const toggleBtn = document.getElementById("dark-mode-toggle");
const sideMsg = document.getElementById("side-message");

const messages = [
  "Light mode? In this economy?",
  "I like it dark. Deal with it 🌚",
  "Fun fact: Light mode is illegal here.",
  "Nice try. Dark mode is permanent 😎",
];

toggleBtn.addEventListener("click", () => {
  const randomMsg = messages[Math.floor(Math.random() * messages.length)];
  sideMsg.textContent = randomMsg;
  sideMsg.classList.add("show");

  setTimeout(() => {
    sideMsg.classList.remove("show");
  }, 4000);
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

// Typing Animation
const typingText = document.querySelector(".typing-text");
const texts = [
  "Backend Developer",
  "Software Engineer",
  "Problem Solver",
  "Tech Innovator",
  "Code Enthusiast",
  "Aviation Lover",
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
  const currentText = texts[textIndex];

  if (isDeleting) {
    typingText.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingText.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 50 : 100;

  if (!isDeleting && charIndex === currentText.length) {
    typeSpeed = 2000; // Pause at end
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length;
    typeSpeed = 500; // Pause before next word
  }

  setTimeout(typeWriter, typeSpeed);
}

// Start typing animation
typeWriter();

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Navbar Background on Scroll
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(15, 23, 42, 0.98)";
  } else {
    navbar.style.background = "rgba(15, 23, 42, 0.95)";
  }
});

// Intersection Observer for Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");

      // Animate skill bars
      // if (entry.target.classList.contains("skill-progress")) {
      //   const width = entry.target.getAttribute("data-width");
      //   setTimeout(() => {
      //     entry.target.style.width = width;
      //   }, 200);
      // }
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll(".fade-in, .skill-progress").forEach((el) => {
  el.classList.add("fade-in");
  observer.observe(el);
});

// Add fade-in class to elements that should animate
document.addEventListener("DOMContentLoaded", () => {
  const animateElements = [
    ".about-card",
    ".stat-card",
    ".project-card",
    ".interest-card",
    ".contact-card",
    ".timeline-item",
  ];

  animateElements.forEach((selector) => {
    document.querySelectorAll(selector).forEach((el) => {
      el.classList.add("fade-in");
      observer.observe(el);
    });
  });
});

// Scroll to Top Functionality
const scrollToTopBtn = document.getElementById("scroll-to-top");

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Show/hide scroll to top button and handle click
window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 300) {
    scrollToTopBtn.classList.add("visible");
  } else {
    scrollToTopBtn.classList.remove("visible");
  }
});

// Add click event listener
scrollToTopBtn.addEventListener("click", scrollToTop);

// Active Navigation Link Highlighting
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Hmmmmm
const dot = document.getElementById("dot");
const hint = document.getElementById("dot-hint");
const popup = document.getElementById("dot-popup");

let clickCount = 0;
const clickThreshold = 2;

dot.addEventListener("click", () => {
  clickCount++;

  if (clickCount === clickThreshold) {
    hint.classList.add("show");

    setTimeout(() => {
      hint.classList.remove("show");
    }, 5000);
  }

  if (clickCount === 30) {
    popup.innerHTML =
      "Ok Ok🤣🤣. I'm sorry for wasting your time. <br> Try looking at the dot's CSS in the dev tools.";
    popup.classList.add("show");
    setTimeout(() => popup.classList.remove("show"), 10000);
  }
});


// Initialize AOS (Animate On Scroll) alternative
const initScrollAnimations = () => {
  const elements = document.querySelectorAll("[data-aos]");

  const animateOnScroll = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const animationType = element.getAttribute("data-aos");
          const delay = element.getAttribute("data-aos-delay") || 0;

          setTimeout(() => {
            element.classList.add("animate-" + animationType.replace("-", "-"));
          }, delay);
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((el) => animateOnScroll.observe(el));
};

// Initialize scroll animations
initScrollAnimations();

// Particle effect for hero background
const createParticles = () => {
  const hero = document.querySelector(".hero-background");
  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: var(--primary-color);
            border-radius: 50%;
            opacity: 0.3;
            animation: float ${Math.random() * 3 + 2}s ease-in-out infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 2}s;
        `;
    hero.appendChild(particle);
  }
};

// Initialize particles on load
document.addEventListener("DOMContentLoaded", createParticles);

// Console message for developers
console.log("You're not supposed to be here... 😐");
console.log(
  "Fine, here's a secret: I once debugged with print statements... for 3 hours."
);  
