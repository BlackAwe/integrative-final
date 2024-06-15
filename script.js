// Smooth Scrolling Effect in Nav Links
document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    document.querySelector(href).scrollIntoView({
      behavior: 'smooth',
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
    const navbar = document.querySelector('.navbar');
    navbar.classList.add('animated', 'slideInDown');
  }
  lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
};

// Fading in and fade out animation for the header
window.onload = function () {
  const title = document.querySelector('.header-title');
  const subtitle = document.querySelector('.header-subtitle');

  title.classList.add('animated', 'fadeInDown');
  subtitle.classList.add('animated', 'fadeInUp');
};

// Adding a form submission for the contact us
document.addEventListener('DOMContentLoaded', function () {
  let form = document.getElementById('contactForm');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let number = document.getElementById('number').value;
    let message = document.getElementById('message').value;

    // Validate the input fields
    if (!firstName || !lastName || !email || !number || !message) {
      alert('Please fill out all fields.');
      return false;
    }

    // Validate email
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }

    // Validate number
    let numberRegex = /^[0-9]+$/;
    if (!numberRegex.test(number)) {
      alert('Please enter a valid number.');
      return false;
    }

    // Show the success modal
    let successModal = new bootstrap.Modal(
      document.getElementById('successModal')
    );
    successModal.show();

    // Reset the form fields
    form.reset();

    return true;
  });
});

document.addEventListener('DOMContentLoaded', function () {
  let aboutHeader = document.getElementById('about');
  let infoSection = document.querySelector('.info-section');

  aboutHeader.addEventListener('click', function () {
    if (infoSection.style.opacity === '0') {
      infoSection.style.opacity = '1';
      infoSection.style.maxHeight = '1000px'; // adjust this value as needed
    } else {
      infoSection.style.opacity = '0';
      infoSection.style.maxHeight = '0';
    }
  });
});
