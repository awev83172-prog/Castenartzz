const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  // Change hamburger ☰ to ✖
  if (menuToggle.innerHTML === "&#9776;") {
    menuToggle.innerHTML = "&#10006;"; // X icon
  } else {
    menuToggle.innerHTML = "&#9776;"; // Hamburger
  }
});
