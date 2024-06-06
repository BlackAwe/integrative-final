// Smooth Scrolling Effect in Nav Links
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    document.querySelector(href).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Navbar Animation on Scroll
let lastScrollTop = 0;

window.onscroll = function () {
  let st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop) {
    // downscroll code
  } else {
    // upscroll code
    const navbar = document.querySelector(".navbar");
    navbar.classList.add("animated", "slideInDown");
  }
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
};

// Fading in and fade out animation for the header
window.onload = function () {
  const title = document.querySelector(".header-title");
  const subtitle = document.querySelector(".header-subtitle");

  title.classList.add("animated", "fadeInDown");
  subtitle.classList.add("animated", "fadeInUp");
};
