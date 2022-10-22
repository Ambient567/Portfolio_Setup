const formStorage = document.getElementById('form');
const nameStorage = document.getElementById('name');
const emailStorage = document.getElementById('email');
const messageStorage = document.getElementById('message');

const toStorage = (nameStorage, emailStorage, messageStorage) => {
  const formObject = {
    name: nameStorage.value,
    email: emailStorage.value,
    message: messageStorage.value,
  };

  const obj = JSON.stringify(formObject);

  localStorage.setItem('a', obj);
};

const setItems = (id, key) => {
  const selectItem = document.getElementById(id);
  selectItem.value = key;
};

const getData = localStorage.getItem('a');
const parseData = JSON.parse(getData);
Object.keys(parseData || {}).forEach((key) => {
  setItems(formStorage.elements[key].name, parseData[key]);
});

formStorage.addEventListener('change', () => {
 toStorage(nameStorage, emailStorage, messageStorage);
});