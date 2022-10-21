const projects = [
  {
    title: 'Tonic',
    devs: ['Yosief', ' • backend', ' • 2022'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    tags: ['html', 'css', 'javascript'],
    image: 'img/popup.png',
    liveVersion: 'See Live',
    sourceLink: 'See Source',
    btnImg1: 'img/btn-img-pu1.png',
    btnImg2: 'img/btn-img-pu2.png',
  },

  {
    title: 'Multi-Post Stories',
    devs: ['Yosief', ' • backend', ' • 2022'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    tags: ['html', 'css', 'javascript'],
    image: 'img/pro4.svg',
    liveVersion: 'See Live',
    sourceLink: 'See Source',
    btnImg1: 'img/btn-img-pu1.png',
    btnImg2: 'img/btn-img-pu2.png',
  },

  {
    title: 'Facebook 360',
    devs: ['Yosief', ' • backend', ' • 2022'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    tags: ['html', 'css', 'javascript'],
    image: 'img/facebook360.svg',
    liveVersion: 'See Live',
    sourceLink: 'See Source',
    btnImg1: 'img/btn-img-pu1.png',
    btnImg2: 'img/btn-img-pu2.png',
  },
];

const buttonOne = document.querySelector('.project-button.one');
const buttonTwo = document.querySelector('.project-button.two');
const buttonThree = document.querySelector('.project-button.three');

function close() {
  const container = document.querySelector('.popup-container');
  container.style.display = 'none';
}

function open(index) {
  const {
    title,
    devs,
    description,
    tags,
    image,
    liveVersion,
    sourceLink,
    btnImg1,
    btnImg2,
  } = projects[index];
  const dev1 = devs[0];
  const dev2 = devs[1];
  const dev3 = devs[2];
  const tags1 = tags[0];
  const tags2 = tags[1];
  const tags3 = tags[2];
  const container = document.querySelector('.popup-container');
  container.innerHTML = `
    <div class="main-pu-container">
    <div class="content-container">
    <div class="heading-btn">
    <h1 class="project-title-pu">${title}</h1>
    <button type="button" class="close-btn-pu">X</button>
    </div>
    <ul class="devs-pu">
    <li class="dev-pu">${dev1}</li>
    <li class="dev-pu2">${dev2}</li>
    <li class="dev-pu2">${dev3}</li>
    </ul>
    <div class="img-container-pu">
    <img src=${image} alt"project-image-pu" class="project-img-pu">
    </div>
    <div class="conatiner-pc-pu">
    <p class="project-info-pu">${description}</p>
    <div class="project-info-pu2">
    <ul class="tags-pu">
    <li class="tag-pu">${tags1}</li>
    <li class="tag-pu">${tags2}</li>
    <li class="tag-pu">${tags3}</li>
    </ul>
    <div class="btn-container-pu">
    <button type="button" class="btn-pu">${liveVersion}<img class="btn-img-pu" src=${btnImg1}></button>
    <button type="button" class="btn-pu t">${sourceLink}<img class="btn-img-pu" src=${btnImg2}></button>
    </div>
    </div>
    </div>
    </div>
    </div>
  
  `;
  container.style.display = 'block';
  const buttonClose = document.querySelector('.close-btn-pu');
  buttonClose.addEventListener('click', close);
}

buttonOne.addEventListener('click', () => {
  open(0);
});
buttonTwo.addEventListener('click', () => {
  open(1);
});
buttonThree.addEventListener('click', () => {
  open(2);
});
