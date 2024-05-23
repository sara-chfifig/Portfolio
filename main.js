let menuIcons = document.querySelector("#menu-icons");
let navbar = document.querySelector(".navbar");

menuIcons.onclick = () => {
  menuIcons.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(" header nav a [href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  let header = document.querySelector("header");
  header.classlist.toggle("sticky", window.scrollY > 100);

  menuIcons.classList.remove("bx-x");
  navbar.classList.remove("active");
};

ScrollReveal({
  // reset: true,//
  distance: "80px",
  duration: 200,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .ABOUT-content, .heading", {
  origin: "top ",
});

ScrollReveal().reveal(
  ".home-image, .services-container, .portfolio-box .Contact form ",
  {
    origin: "bottom",
  }
);

ScrollReveal().reveal(".home-content h1, .ABOUT-img", {
  origin: "left",
});

ScrollReveal().reveal(".home-content p, .ABOUT-content", {
  origin: "right",
});

// Typed //
const typed = new Typed(".multiple-texte", {
  strings: ["budding developer", "writer", "aspiring journalist"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
