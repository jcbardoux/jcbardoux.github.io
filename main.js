

let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/Large_tall_street.JPG') {
      myImage.setAttribute('src', 'images/Building_through_a_screen.JPG');
    } else {
      myImage.setAttribute('src', 'images/Large_tall_street.JPG');
    }
});

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');



function setUserName() {
    let myName = prompt('Veuillez saisir votre nom.');
    localStorage.setItem('nom', myName);
    myHeading.textContent = 'Mozilla est cool, ' + myName;
  }

  if (!localStorage.getItem('nom')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('nom');
    myHeading.textContent = 'Mozilla est cool, ' + storedName;
  }

  myButton.addEventListener('click', function() {
    setUserName();
  });