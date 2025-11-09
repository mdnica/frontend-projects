// Smooth scrolling for Navbar links
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // stop instant jump
    const targetId = link.getAttribute("href"); // get target section (e.g #about)
    const targetSection = document.querySelector(targetId);

    // Scroll smoothly into view
    targetSection.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Scroll to Top Button
const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
