const works = [
  {
    id: 1,
    title: 'Tonic',
    name: 'CANOPY',
    job: 'Back End Dev',
    year: 2015,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    languages: ['html', 'css', 'javascript'],
    image: 'images/popup.png',
    liveLink: 'See Live',
    liveSource: 'See Source',
  },
  {
    id: 2,
    title: 'Multi-Post Stories',
    name: 'FACEBOOK',
    job: 'Full Stack Dev',
    year: 2015,
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    languages: ['html', 'css', 'javascript'],
    image: 'images/pro4.svg',
    liveLink: 'See Live',
    liveSource: 'See Source',
  },
  {
    id: 3,
    title: 'Facebook 360',
    name: 'FACEBOOK',
    job: 'Full Stack Dev',
    year: 2018,
    description: 'Exploring the future of media in Facebook"s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    languages: ['html', 'css', 'javascript'],
    image: 'images/facebook360.svg',
    liveLink: 'See Live',
    liveSource: 'See Source',
  },
  {
    id: 4,
    title: 'Uber Navigation',
    name: 'Uber',
    job: 'Lead Developer',
    year: 2015,
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car',
    languages: ['html', 'css', 'javascript'],
    image: 'images/popup.png',
    liveLink: 'See Live',
    liveSource: 'See Source',
  },
];

function openPopup(value) {
  const container = document.getElementById('popContainer');
  container.innerHTML = `
  <div class="container-section">
  <div class="content-container">
  <div class="heading-btn">
  <h1 class="container-title">${works[value].title}</h1>
  <button type="button" class="close-container-button">X</button>
  </div>
  <ul class="developer">
  <li class="developer">${works[value].name}</li>
  <li class="job">${works[value].job}</li>
  <li class="job">${works[value].year}</li>
  </ul>
  <div class="image-container">
  <img src=${works[value].image} alt"image" class="project-image">
  </div>
  <div class="container-desc">
  <p class="project-decription">${works[value].description}</p>
  <div class="project-decription2">
  <ul class="langs-list">
  <li class="lang-list">${works[value].languages[0]}</li>
  <li class="lang-list">${works[value].languages[1]}</li>
  <li class="lang-list">${works[value].languages[2]}</li>
  </ul>
  <div class="btn-section">
  <button type="submit" class="container-button">${works[value].liveLink}</button>
  <button type="submit" class="container-button t">${works[value].liveSource}</button>
  </div>
  </div>
  </div>
  </div>
  </div>
      `;

  container.style.display = 'block';

  const popupClose = document.querySelector('.close-container-button');
  popupClose.addEventListener('click', () => {
    const container = document.querySelector('.popContainer');
    container.style.display = 'none';
  });
}

const modal = document.getElementById('popContainer');
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

function myFunction() {
  const element = document.querySelector('#myLinks');
  if (element.style.display === 'none') {
    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }
}

myFunction();
openPopup(0);

const usernameEl = document.querySelector('#name');
const emailEl = document.querySelector('#email');
const messageEl = document.querySelector('#message');
const errorEmail = document.querySelector('small');
const form = document.querySelector('#form');

const isRequired = (value) => { if(value === '' ) {return false } else { return  true} ;}
const isBetween = (length, min, max) => {if (length < min || length > max) {return false } else { return  true};}
const isEmailValid = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const showError = (input, message) => {
  const formField = input.parentElement;
  const error = formField.querySelector('small');
  error.textContent = message;
};

const checkEmail = () => {
  if (!(emailEl.value === emailEl.value.toLowerCase())) {
    showError(emailEl, 'Email Address should not have uppercase letters.');
  } else if (!isRequired(email)) {
    showError(emailEl, 'Email cannot be blank.');
  } else if (!isEmailValid(emailEl.value)) {
    showError(emailEl, 'Invalid Email Address');
  } else if (!isBetween(emailEl.length,3,50)) {
    showError(emailEl, 'Email cannot be blank.');
  }

  return true;

}

const checkUsername = () => {
  if (!isBetween(usernameEl.length, 3, 30)) {
    showError(usernameEl, 'Email cannot be blank.');
  } else if (!isRequired(usernameEl)) {
    showError(usernameEl, 'Full name cannot be blank.');
  }

    return true;
  
}

const checkMessage = () => {
  if (!isRequired(messageEl)) {
    showError(messageEl, 'Text area cannot be blank.');
  } else if (!isBetween(messageEl.length,3,400)) {
    showError(messageEl, 'Text area cannot be blank.');
  }

    return true;
  
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const isUsernameValid = checkUsername(),
  isEmailValid = checkEmail(),
  isMessageValid = checkMessage();

  const isFormValid = isUsernameValid 
  && isEmailValid 
  && isMessageValid;

// submit to the server if the form is valid
  if (isFormValid) {
    errorEmail.textContent = '';
    form.submit();
  }
});