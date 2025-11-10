// Smooth scroll for nav links
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document
      .querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Scroll-to-top button
const scrollBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Contact form message
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for contacting TasteBite! We’ll get back to you soon.");
  form.reset();
});
