// ----- Smooth Scroll for Navigation -----
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// ----- Email Validation for Early Access Form -----
const form = document.querySelector('form');
const emailInput = form.querySelector('input[type="email"]');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.match(emailPattern)) {
    alert('✅ Thank you for signing up!');
    emailInput.value = '';
  } else {
    alert('❌ Please enter a valid email address.');
    emailInput.focus();
  }
});

// ----- Fade-In Animation on Scroll -----
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('section').forEach(section => {
  section.classList.add('hidden');
  observer.observe(section);
});
