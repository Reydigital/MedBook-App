const form = document.querySelector('#signup-form');

// Validate form inputs
function validateForm() {
  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const passwordInput = document.querySelector('#password');
  const confirmPasswordInput = document.querySelector('#confirm-password');
  const roleSelect = document.querySelector('#role');

  let valid = true;

  // Validate name input
  if (nameInput.value === '') {
    setErrorFor(nameInput, 'Name cannot be blank');
    valid = false;
  } else {
    setSuccessFor(nameInput);
  }

  // Validate email input
  if (emailInput.value === '') {
    setErrorFor(emailInput, 'Email cannot be blank');
    valid = false;
  } else if (!isEmailValid(emailInput.value)) {
    setErrorFor(emailInput, 'Invalid email format');
    valid = false;
  } else {
    setSuccessFor(emailInput);
  }

  // Validate password input
  if (passwordInput.value === '') {
    setErrorFor(passwordInput, 'Password cannot be blank');
    valid = false;
  } else if (passwordInput.value.length < 8) {
    setErrorFor(passwordInput, 'Password must be at least 8 characters long');
    valid = false;
  } else {
    setSuccessFor(passwordInput);
  }

  // Validate confirm password input
  if (confirmPasswordInput.value === '') {
    setErrorFor(confirmPasswordInput, 'Please confirm your password');
    valid = false;
  } else if (passwordInput.value !== confirmPasswordInput.value) {
    setErrorFor(confirmPasswordInput, 'Passwords do not match');
    valid = false;
  } else {
    setSuccessFor(confirmPasswordInput);
  }

  // Validate role select
  if (roleSelect.value === '') {
    setErrorFor(roleSelect, 'Please select a role');
    valid = false;
  } else {
    setSuccessFor(roleSelect);
  }

  return valid;
}

// Set error message for input field
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const errorText = formControl.querySelector('.error-text');
  formControl.className = 'form-control error';
  errorText.innerText = message;
}

// Set success message for input field
function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Check if email is valid
function isEmailValid(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Submit form data
form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (validateForm()) {
    const formData = new FormData(form);
    const user = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
      role: formData.get('role'),
    };

    // Perform API call to register user
    fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle successful registration
        console.log('User registered:', data);
        form.reset();
        setSuccessFor(document.querySelector('#name'));
        setSuccessFor(document.querySelector('#email'));
        setSuccessFor(document.querySelector('#password'));
        setSuccessFor(document.querySelector('#confirm-password'));
        setSuccessFor(document.querySelector('#role'));
