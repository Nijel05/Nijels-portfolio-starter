// ============================================================
// PROJECTS DATA
// ============================================================
const projects = [
  {
    title: "Virtual Smart Study Assistant (VSSA)",
    description: "A full-stack study assistant helping students manage study sessions, track progress, import questions, practice with flashcards, and prepare for exams using an intelligent study workflow. Built as a senior capstone project.",
    tags: ["React", "JavaScript", "Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/Nijel05",
    demo: null,
  },
  {
    title: "Course Planning System",
    description: "A web application designed for Computer Science students to plan their degree by organizing courses, prerequisites, and graduation requirements using an interactive planner interface.",
    tags: ["HTML", "CSS", "JavaScript", "Local Storage"],
    github: "https://github.com/Nijel05",
    demo: null,
  },
  {
    title: "Developer Portfolio",
    description: "A responsive personal portfolio website showcasing projects, technical skills, education, and professional experience while demonstrating modern frontend development best practices.",
    tags: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    github: "https://github.com/Nijel05",
    demo: null,
  },
];

// ============================================================
// SKILLS DATA
// ============================================================
const skills = [
  "Python", "JavaScript", "Java", "C++",
  "HTML & CSS", "Git & GitHub",
  "React", "Node.js",
  "SQL", "Linux",
];

// ============================================================
// RENDER PROJECTS
// ============================================================
function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container) return;

  container.innerHTML = projects
    .map(
      (project) => `
      <div class="project-card">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tags">
          ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
        <div class="project-links">
          ${project.github ? `<a href="${project.github}" target="_blank">GitHub →</a>` : ""}
          ${project.demo ? `<a href="${project.demo}" target="_blank">Live Demo →</a>` : ""}
        </div>
      </div>
    `
    )
    .join("");
}

// ============================================================
// RENDER SKILLS
// ============================================================
function renderSkills() {
  const container = document.getElementById("skills-container");
  if (!container) return;

  container.innerHTML = skills
    .map((skill) => `<span class="skill-badge">${skill}</span>`)
    .join("");
}

// ============================================================
// DARK MODE TOGGLE
// TODO: Implement this! Here's a stub to get you started.
// Ask Copilot (inline chat on this function): "Implement dark mode
// toggle that saves preference to localStorage"
// ============================================================
function toggleDarkMode() {
  // Your implementation here
}

// ============================================================
// RENDER FOOTER WITH SOCIAL ICONS
// ============================================================
function renderFooter() {
  const footer = document.querySelector("footer");
  if (!footer) return;

  footer.innerHTML = `
    <div class="footer-content">
      <p>© 2026 Nijel Cook • Built with HTML, CSS, JavaScript, GitHub Pages, and GitHub Copilot</p>
      <div class="social-icons">
        <a href="https://github.com/Nijel05" target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/nijel-cook-b85b88416" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.469v6.766z"/>
          </svg>
        </a>
        <a href="mailto:nijel.cook101@gmail.com" title="Email" aria-label="Email">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
        </a>
      </div>
    </div>
  `;
}

// ============================================================
// UPDATE FOOTER YEAR
// ============================================================
function updateYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

// ============================================================
// TYPING ANIMATION FOR NAME
// ============================================================
function typeHeadline() {
  const element = document.querySelector(".headline-text");
  if (!element) return;

  const text = element.textContent;
  element.textContent = "";
  element.style.opacity = "1";
  
  let index = 0;
  const speed = 50;

  function type() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  }

  type();
}

// ============================================================
// INIT
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderSkills();
  renderFooter();
  updateYear();
  
  // Trigger typing animation after a short delay
  setTimeout(typeHeadline, 300);

  // TODO: Wire up your dark mode toggle button here once you add it
});
