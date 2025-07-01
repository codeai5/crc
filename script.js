document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Get input values
  const name = document.getElementById('fullname').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();

  // Error elements
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const phoneError = document.getElementById('phoneError');
  const messageError = document.getElementById('messageError');

  // Reset error messages
  nameError.textContent = '';
  emailError.textContent = '';
  phoneError.textContent = '';
  messageError.textContent = '';

  let isValid = true;

  if (name.length < 3) {
    nameError.textContent = 'Name must be at least 3 characters';
    isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = 'Enter a valid email';
    isValid = false;
  }

  const phonePattern = /^\d{10}$/;
  if (!phonePattern.test(phone)) {
    phoneError.textContent = 'Phone must be 10 digits';
    isValid = false;
  }

  if (message === '') {
    messageError.textContent = 'Message is required';
    isValid = false;
  }

  if (isValid) {
    alert('Your message has been sent successfully!');
    document.getElementById('contactForm').reset();
  }
});
