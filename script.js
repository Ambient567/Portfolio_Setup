function myFunction() {
  const element = document.querySelector('#myLinks');
  if (element.style.display === 'none') {
    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }
}

myFunction();