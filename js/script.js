/**
 * Asmit Yadav — Personal Portfolio Website
 * Academic Practical: Module 4 Practical 1: Website Development & Version Control
 * Vanilla JavaScript Implementation
 */

// --------------------------------------------------------------------------
// 1. Centralized Configuration Object
// --------------------------------------------------------------------------
const PORTFOLIO_CONFIG = {
  author: {
    name: "Asmit Yadav",
    role: "Computer Science Undergraduate | Data Science & Analytics",
    institution: "Indian Institute of Information Technology (IIIT), Nagpur",
    expectedGraduation: 2028,
    cgpa: "8.50 / 10"
  },
  social: {
    github: "https://github.com/asminity",
    linkedin: "#", // Placeholder: update with verified LinkedIn profile URL when available
    email: "asmit12yadav@gmail.com"
  },
  projectRepos: {
    lamit: "https://github.com/asminity", // Configurable link until dedicated repo path is set
    penchEye: "https://github.com/asminity/Pench_Eye",
    shikshaNetra: "https://github.com/asminity/ShikshaNetra",
    cogniCare: "https://github.com/asminity", // Configurable placeholder link
    blockChAi: "https://github.com/asminity"  // Configurable placeholder link
  }
};

// --------------------------------------------------------------------------
// 2. DOM Initialization & Event Bindings
// --------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  initNavbarBehavior();
  initDynamicYear();
  initBackToTop();
  logDeveloperGreeting();
});

/**
 * Handles navbar background transition and mobile menu auto-close
 */
function initNavbarBehavior() {
  const navbar = document.querySelector(".custom-navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  // Scroll effect on navbar
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar?.classList.add("scrolled");
    } else {
      navbar?.classList.remove("scrolled");
    }
  });

  // Automatically close mobile menu when a navigation link is clicked
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (navbarCollapse && navbarCollapse.classList.contains("show")) {
        // Use Bootstrap Collapse API if available, or fall back to class toggle
        if (typeof bootstrap !== "undefined" && bootstrap.Collapse) {
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
          if (bsCollapse) {
            bsCollapse.hide();
          } else {
            navbarCollapse.classList.remove("show");
          }
        } else {
          navbarCollapse.classList.remove("show");
        }
      }
    });
  });
}

/**
 * Dynamically inserts the current calendar year into footer
 */
function initDynamicYear() {
  const yearElement = document.getElementById("current-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

/**
 * Controls back-to-top smooth scrolling
 */
function initBackToTop() {
  const backToTopBtn = document.getElementById("back-to-top");
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
}

/**
 * Friendly developer console greeting
 */
function logDeveloperGreeting() {
  console.log(
    `%c Asmit Yadav %c Portfolio Initialized `,
    "background: #3b82f6; color: white; font-weight: bold; padding: 4px 8px; border-radius: 4px 0 0 4px;",
    "background: #0f1422; color: #06b6d4; padding: 4px 8px; border-radius: 0 4px 4px 0;"
  );
  console.log(`GitHub: ${PORTFOLIO_CONFIG.social.github}`);
}
