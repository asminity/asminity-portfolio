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
    linkedin: "#", // Placeholder: update when verified LinkedIn profile is available
    email: "asmit12yadav@gmail.com"
  },
  projectRepos: {
    lamit: "https://github.com/asminity/Lamit",
    penchEye: "https://github.com/asminity/Pench_Eye",
    shikshaNetra: "https://github.com/asminity/ShikshaNetra",
    cogniCare: "https://github.com/asminity/CogniCare",
    blockChAi: "https://github.com/asminity/SIH-Prototype"
  }
};

// --------------------------------------------------------------------------
// 2. DOM Initialization & Event Bindings
// --------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  applyPortfolioConfig();
  initNavbarBehavior();
  initScrollSpy();
  initProjectFiltering();
  initContactFormValidation();
  initDynamicYear();
  initBackToTop();
  logDeveloperGreeting();
});

/**
 * Applies centralized config to DOM elements (emails, social links)
 */
function applyPortfolioConfig() {
  const emailLink = document.getElementById("contact-email-link");
  const emailDisplay = document.getElementById("contact-email-display");
  const linkedinLink = document.getElementById("contact-linkedin-link");
  const githubLink = document.getElementById("contact-github-link");

  if (emailLink && PORTFOLIO_CONFIG.social.email) {
    emailLink.href = `mailto:${PORTFOLIO_CONFIG.social.email}`;
  }
  if (emailDisplay && PORTFOLIO_CONFIG.social.email) {
    emailDisplay.textContent = PORTFOLIO_CONFIG.social.email;
  }
  if (linkedinLink && PORTFOLIO_CONFIG.social.linkedin !== "#") {
    linkedinLink.href = PORTFOLIO_CONFIG.social.linkedin;
    linkedinLink.removeAttribute("title");
  }
  if (githubLink && PORTFOLIO_CONFIG.social.github) {
    githubLink.href = PORTFOLIO_CONFIG.social.github;
  }
}

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
 * Active navigation link tracking based on current viewport scroll position
 */
function initScrollSpy() {
  const sections = document.querySelectorAll("header[id], section[id]");
  const navLinks = document.querySelectorAll(".custom-navbar .nav-link");

  if (!sections.length || !navLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -60% 0px",
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const activeId = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          if (link.getAttribute("href") === `#${activeId}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/**
 * Handles category-based project card filtering with smooth transitions
 */
function initProjectFiltering() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectItems = document.querySelectorAll(".project-item");

  if (!filterButtons.length || !projectItems.length) return;

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Toggle active styling on buttons
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const selectedFilter = button.getAttribute("data-filter");

      // Filter project cards based on data-category attribute
      projectItems.forEach(item => {
        const itemCategory = item.getAttribute("data-category");

        if (selectedFilter === "all" || itemCategory === selectedFilter) {
          item.classList.remove("filter-hide");
        } else {
          item.classList.add("filter-hide");
        }
      });
    });
  });
}

/**
 * Handles client-side contact form validation with accessible feedback
 */
function initContactFormValidation() {
  const contactForm = document.getElementById("portfolio-contact-form");
  const feedbackAlert = document.getElementById("form-feedback");

  if (!contactForm) return;

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Check HTML5 validity
    if (!contactForm.checkValidity()) {
      contactForm.classList.add("was-validated");
      if (feedbackAlert) feedbackAlert.style.display = "none";
      return;
    }

    // Form is valid: show demo verification message
    contactForm.classList.remove("was-validated");
    if (feedbackAlert) {
      feedbackAlert.style.display = "block";
      feedbackAlert.focus();
    }

    // Read form values safely
    const name = document.getElementById("form-name")?.value;
    const email = document.getElementById("form-email")?.value;
    const subject = document.getElementById("form-subject")?.value;

    console.info(`[Demo Form Submission Validated]: Sender: ${name} (${email}), Subject: ${subject}`);
    
    // Reset form fields
    contactForm.reset();

    // Hide feedback message after 7 seconds
    setTimeout(() => {
      if (feedbackAlert) {
        feedbackAlert.style.display = "none";
      }
    }, 7000);
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
