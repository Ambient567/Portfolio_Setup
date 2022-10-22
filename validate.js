const usernameEl = document.querySelector('#name');
const emailEl = document.querySelector('#email');
const messageEl = document.querySelector('#message');
const errorEmail = document.querySelector('small');

const form = document.querySelector('#form');

const isRequired = (value) => {
  if (value === '') {
    valid = false;
  } else {
    valid = true;
  }
  return valid;
};
  
const isBetween = (length, min, max) => {
  if (length < min || length > max) {
    valid = false;
  } else {
    valid = true;
  }
  return valid;
};

const isEmailValid = (email) => {
  const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return re.test(email);
};

const showError = (input, message) => {
  const formField = input.parentElement;
  const error = formField.querySelector('small');
  error.textContent = message;
};

const checkEmail = () => {
  let valid = false;

  if (emailEl.value === emailEl.value.toLowerCase()) {
    errorEmail.textContent = '';
    if (!isEmailValid(emailEl.value)) {
      showError(emailEl, 'Invalid Email Address');
    }
    else {
      valid = true;
    }
  } else {
    errorEmail.textContent = 'Email Address should not have uppercase letters.';
  }
  return valid;
};

const checkUsername = () => {
  let valid = false;
  if (!isBetween(usernameEl.length, 3, 30)) {
    showError(usernameEl, 'Email cannot be blank.');
  } else if (!isRequired(usernameEl)) {
    showError(usernameEl, 'Full name cannot be blank.');
  } else {
    valid = true;
  }
  return valid;
};

const checkMessage = () => {
  let valid = false;
  if (!isRequired(messageEl)) {
    showError(messageEl, 'Text area cannot be blank.');
  } else if (!isBetween(messageEl.length, 3, 400)) {
    showError(messageEl, 'Text area cannot be blank.');
  } else {
    valid = true;
  }
    return valid;
};


form.addEventListener('submit', function (e) { 
  e.preventDefault();
  const isUsernameValid = checkUsername();
  const emailValid = checkEmail();
  const isMessageValid = checkMessage();

  const isFormValid = isUsernameValid 
    && emailValid 
    && isMessageValid;
        
// submit to the server if the form is valid
  if (isFormValid) {
    errorEmail.textContent = '';
    form.submit();
  }
});