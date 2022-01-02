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
  function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }

  myButton.onclick = function() {
  setUserName(), validateForm();
  }
