// ── Mobile Nav Toggle ──
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Close menu when a nav link is clicked
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

// ── Highlight Active Nav Link on Scroll ──
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  links.forEach((link) => {
    link.style.color = "";
    if (link.getAttribute("href") === `#${current}`) {
      link.style.color = "#6c63ff";
    }
  });
});

// ── Fade-in Animation on Scroll ──
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 },
);

document.querySelectorAll("section").forEach((section) => {
  section.classList.add("fade-section");
  observer.observe(section);
});

// ── Typing Effect in Hero ──
const tagline = document.querySelector("#hero p");
const text = tagline.textContent;
tagline.textContent = "";
let i = 0;

function type() {
  if (i < text.length) {
    tagline.textContent += text.charAt(i);
    i++;
    setTimeout(type, 40);
  }
}

setTimeout(type, 500);
