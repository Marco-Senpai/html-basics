let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');



function setUserName() {
    let myName = prompt("What's your name?");
    if(!myName) {
      setUserName();

    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Videogames are awesome, ' + myName;

    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();

  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Videgames are awesome, ' + storedName;
  }

  myButton.onclick = function() {
  setUserName();
  }