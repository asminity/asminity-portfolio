# Project Documentation & Practical Submission Details

## 📋 Academic Submission Metadata

| Attribute | Details |
| :--- | :--- |
| **Student Name** | Asmit Yadav |
| **Degree / Major** | B.Tech in Computer Science and Engineering (Data Science & Analytics) |
| **Institution** | Indian Institute of Information Technology (IIIT), Nagpur |
| **Academic Practical** | Module 4 Practical 1: Website Development & Version Control |
| **Expected Graduation** | 2028 |
| **CGPA** | 8.50 / 10 |
| **Primary Contact Email** | `asmit12yadav@gmail.com` |
| **GitHub Profile** | [https://github.com/asminity](https://github.com/asminity) |

---

## 🌐 Project Links

* **Official GitHub Repository**:  
  [https://github.com/asminity/asminity-portfolio](https://github.com/asminity/asminity-portfolio)
* **Live Deployed Portfolio (GitHub Pages)**:  
  [https://asminity.github.io/asminity-portfolio/](https://asminity.github.io/asminity-portfolio/)
* **Netlify Deployment Target**:  
  Configured via [`netlify.toml`](../netlify.toml) for zero-latency multi-cloud redundancy.

---

## 🚀 Project Overview

This project implements a single-page personal developer portfolio built for **Module 4 Practical 1: Website Development & Version Control**. The site showcases undergraduate coursework, research projects, technical competencies, and hands-on implementations in Artificial Intelligence, Machine Learning, Large Language Model (LLM) agents, Computer Vision, and Full-Stack Engineering.

### Key Architectural Highlights
* **Zero-Build Vanilla Architecture**: Pure HTML5, CSS3, and vanilla JavaScript without heavy framework bloat or node compilation overhead.
* **Modern Aesthetic**: Dark charcoal foundation (`#0a0d14`) accented by electric blue (`#3b82f6`), violet (`#8b5cf6`), and cyan (`#06b6d4`) glows.
* **Glassmorphism Design**: Frosted glass containers (`backdrop-filter: blur(12px)`), translucent border highlights, and micro-hover interactions.
* **Dynamic Interactive Filtering**: Client-side category switching (All, AI / ML, GenAI / LLM, Full-Stack Software) with smooth CSS transitions and accessible ARIA states.
* **Client-Side Form Validation**: Contact form with real-time feedback, email syntax verification, and alert states.
* **Fully Responsive**: Bootstrap 5.3.3 grid system customized with mobile-friendly collapsible navigation and touch-optimized card layouts.

---

## 📁 Repository Structure

```text
Porfolio_website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated CI/CD pipeline deploying to GitHub Pages on push to main
├── assets/
│   └── README.md               # Asset guidelines and lightweight SVG/CSS icon strategy
├── css/
│   └── style.css               # Design system tokens, glassmorphism, responsive media queries
├── docs/
│   ├── PROJECT_DETAILS.docx    # Formatted Word Document for academic lab submission
│   └── PROJECT_DETAILS.md      # Markdown documentation with repository and deployment links
├── js/
│   └── script.js               # Centralized configuration, project filter engine, form validation
├── .gitignore                  # Exclusion rules for OS artifacts, caches, and IDE configs
├── index.html                  # Semantic HTML5 single-page application entry point
├── netlify.toml                # Netlify edge deployment configuration and security headers
└── README.md                   # Comprehensive project documentation & Git workflow guide
```

---

## 🛠️ Version Control Workflow (Module 4 Evaluation)

The repository demonstrates a complete Git version control lifecycle as required by the academic curriculum:

1. **Phase 1: Repository Initialization & Hygiene**
   * Configured git user credentials (`user.name` and `user.email`).
   * Initialized repository with default branch `main`.
   * Created comprehensive `.gitignore` and committed initial project scaffold.

2. **Phase 2: Atomic Staged Commits**
   * Segmented feature implementation into atomic, descriptive commits tracking semantic sections (Navbar, Hero, About, Skills, Projects, Experience, and Contact Form).

3. **Phase 3: Feature Branching Workflow**
   * Branched isolated feature development on `feature/project-filter`.
   * Implemented interactive project category filter controls and smooth transition states.
   * Merged feature branch into `main` after verification.

4. **Phase 4: Remote Repository Configuration**
   * Connected local repository to remote origin on GitHub: `https://github.com/asminity/asminity-portfolio.git`.
   * Established upstream branch tracking for both `main` and `feature/project-filter`.

5. **Phase 5: Distributed Workflow Simulation**
   * Validated branch tracking, remote fetch, and pull synchronization.

6. **Phase 6: Commit Log Audit & Verification**
   * Maintained linear, clean Git log history inspectable via `git log --oneline --graph --all`.

7. **Phase 7: Automated CI/CD Deployment**
   * Configured GitHub Actions workflow (`.github/workflows/deploy.yml`) with automated build and deployment to GitHub Pages.
   * Continuous deployment triggered automatically upon every commit to `main`.

---

## 🔬 Featured Projects & Codebases

The portfolio presents 5 real-world engineering projects with verified GitHub repositories:

1. **Lamit — AI Agentic Assistant**
   * *Description*: Conversational AI agent exploring stateful interactions, tool orchestration, and memory persistence.
   * *Stack*: Python, LangChain, LangGraph, FastAPI, PostgreSQL
   * *Repository*: [https://github.com/asminity/Lamit](https://github.com/asminity/Lamit)

2. **PenchEye — Wildlife Tiger Re-Identification**
   * *Description*: Computer vision pipeline for individual tiger re-identification from camera-trap imagery for wildlife conservation research.
   * *Stack*: Python, YOLO, MegaDescriptor, FastAPI, React / TypeScript
   * *Repository*: [https://github.com/asminity/Pench_Eye](https://github.com/asminity/Pench_Eye)

3. **ShikshaNetra — Automated Teaching Evaluation**
   * *Description*: Multimodal AI system analyzing classroom audio/video transcripts to generate structured pedagogical feedback.
   * *Stack*: Python, Audio/Video Processing, Gemini API, Structured JSON
   * *Repository*: [https://github.com/asminity/ShikshaNetra](https://github.com/asminity/ShikshaNetra)

4. **CogniCare — Healthcare Decision-Support Platform**
   * *Description*: Relational backend connecting hospitals, treatments, insurance, and medical data for transparent care decisions.
   * *Stack*: Python, FastAPI, PostgreSQL, SQLAlchemy, Alembic
   * *Repository*: [https://github.com/asminity/CogniCare](https://github.com/asminity/CogniCare)

5. **BlockCH-ai — SIH Blockchain Anomaly Risk Analysis**
   * *Description*: Graph neural network risk assessment identifying anomalous transaction flows and network patterns.
   * *Stack*: Python, PyTorch, GraphSAGE, NetworkX
   * *Repository*: [https://github.com/asminity/SIH-Prototype](https://github.com/asminity/SIH-Prototype)
