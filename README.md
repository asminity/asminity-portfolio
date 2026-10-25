# Asmit Yadav — Personal Portfolio Website

[![Portfolio License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Bootstrap 5](https://img.shields.io/badge/Bootstrap-5.3.3-7952B3?style=flat&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

> **Academic Practical**: Module 4 Practical 1: Website Development & Version Control  
> **Student**: Asmit Yadav  
> **Institution**: Indian Institute of Information Technology (IIIT), Nagpur  
> **Department**: Computer Science and Engineering (Data Science & Analytics)  
> **Expected Graduation**: 2028 | **CGPA**: 8.50 / 10  
> **GitHub Profile**: [https://github.com/asminity](https://github.com/asminity)  
> **Live Deployment**: [https://asminity.github.io/asminity-portfolio/](https://asminity.github.io/asminity-portfolio/)  

---

## 📌 Project Overview

This repository contains the source code and version control history for the personal developer portfolio website of **Asmit Yadav**. 

The portfolio is designed specifically for academic evaluation, internship applications, technical recruiter reviews, and hackathons. It highlights practical AI/ML engineering, LLM applications, RAG pipelines, agentic workflows, and data science projects built during undergraduate studies at IIIT Nagpur.

---

## ✨ Design & Architecture Highlights

- **Visual Aesthetic**: Tailored dark charcoal and near-black background (`#0a0d14`) accented with electric blue (`#3b82f6`), violet (`#8b5cf6`), and cyan (`#06b6d4`).
- **Glassmorphism**: Translucent cards with subtle borders, backdrop blurs, and tasteful glows.
- **Typography**: Clean pairings of **Inter** (body and UI) and **Space Grotesk** (headings and code accents).
- **Responsive Grid**: Built on Bootstrap 5.3.3 grid system, custom-styled without heavy frameworks or CSS bloat.
- **Zero-Build Architecture**: Completely static HTML5, CSS3, and vanilla JavaScript runnable directly in any browser without Node.js or bundlers.
- **Accessibility & Performance**: Semantic HTML tags, high-contrast readable elements, keyboard accessibility, and `prefers-reduced-motion` compliance.

---

## 📁 Project Structure

```text
Porfolio_website/
├── index.html          # Semantic HTML5 single-page application structure
├── css/
│   └── style.css       # Custom design system tokens, typography, glassmorphism, responsive styles
├── js/
│   └── script.js       # Centralized config, smooth scroll, form validation, project filtering
├── assets/
│   └── README.md       # Guidelines for static media and assets
├── .gitignore          # Excludes OS, editor, and temporary files from version control
└── README.md           # Comprehensive project documentation & Git workflow guide
```

---

## 🚀 Local Setup & Viewing

Because this project uses vanilla web standards, no compilation or npm dependencies are required:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/asminity/asminity-portfolio.git
   cd asminity-portfolio
   ```

2. **Open directly in browser**:
   - Double-click `index.html` to open it in your default web browser, OR
   - In Visual Studio Code, right-click `index.html` and select **"Open with Live Server"**.

---

## 🛠️ Version Control & Git Practical Workflow

This project rigorously demonstrates the version control workflow outlined in **Module 4 Practical 1**:

- **Phase 1: Git Initialization**: Repository setup (`git init -b main`), user credentials configuration, `.gitignore`, and initial baseline commit.
- **Phase 2: Incremental Staged Commits**: Atomic commits tracking navigation, hero, about, skills, projects, experience, and contact sections.
- **Phase 3: Feature Branch Workflow**: Creation of `feature/project-filter`, implementation of dynamic project category filtering, isolated commits, and pull request integration.
- **Phase 4: Remote Repository Setup**: Connecting local repository to GitHub (`asminity-portfolio`) and pushing branches.
- **Phase 5: Distributed Workflow**: Demonstrating `git clone`, upstream synchronization via `git pull` vs `git fetch`.
- **Phase 6: Git History Inspection**: Audit logs with `git log --oneline --graph --all` for lab viva evaluation.
- **Phase 7: GitHub Pages Deployment**: Publishing static website directly from `main` branch root.

---

## 👤 Author

**Asmit Yadav**  
- B.Tech in CSE (Data Science & Analytics), IIIT Nagpur (Class of 2028)  
- GitHub: [@asminity](https://github.com/asminity)  
- Email: `asmit12yadav@gmail.com`
