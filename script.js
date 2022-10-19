//add event listener to id bars

function myFunction() {
  const element = document.querySelector("#myLinks");
  var logo = document.getElementsByClassName("dropDown");
  var name = document.getElementsByClassName("icon");
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }

}

myFunction();




