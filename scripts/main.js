let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');



function setUserName() {
    let myName = window.prompt("What's your name?");
    alert("Your name is " + myName)
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
  function validateForm() {
    let myName = document.forms["myForm"]["fname"].value;
    if (myName == "") {
      alert("Name must be filled out");
      return false;
    }
  }
  function validateForm();