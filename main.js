/
const navbar = document.getElementById('navbar');
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');


window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


hamburgerBtn.addEventListener('click', () => {

  hamburgerBtn.classList.toggle('toggle');


  mobileMenu.classList.toggle('open');

  document.body.style.overflow = 'hidden'
});


const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburgerBtn.classList.remove('toggle');
    mobileMenu.classList.remove('open');

    document.body.style.overflow = ''
  });
});

document.getElementById('newsletter-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const emailInput = document.getElementById('email-input');
  const message = document.getElementById('form-message');
  const emailValue = emailInput.value.trim();


  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(emailValue)) {

    message.style.color = '#16a34a';
    window.location.href = '404.html'
    message.textContent = 'Thank you! You have been subscribed.';
    emailInput.value = '';
  } else {

    message.style.color = '#ef4444';
    message.textContent = 'Please enter a valid email address.';
  }
});

