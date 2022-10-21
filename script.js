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

function open_popup(value) {
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

  const popup_Close = document.querySelector('.close-container-button');
  popup_Close.addEventListener('click', () => {
    const container = document.querySelector('.popContainer');
    container.style.display = 'none';
  });
}

const modal = document.getElementById('popContainer');
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

function myFunction() {
  const element = document.querySelector('#myLinks');
  if (element.style.display === 'none') {
    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }
}

myFunction();