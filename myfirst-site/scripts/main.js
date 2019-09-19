// Code and text taken from https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics

// Here we store a reference to <img> element in the myImage variable.
let myImage = document.querySelector('img');

/* Make myImage variable's onclick event handler property equal to a function with no name. Now, every time this element is clicked:
1. You retrieve the value of the image's src attribute.
2. Use a conditional block to check whether the src value is equal to the path to the original image:
  1. If is it, you change the src value to the path to the 2nd image, forcing the other image to be loaded inside the <img> element
  2. If it isn't (meaning it must have already changed), the src value swaps back to the original image path, to the original state
*/
myImage.onclick = function(){
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/cassie.jpg'){
    myImage.setAttribute ('src', 'images/cassie1.jpg');
  } else {
    myImage.setAttribute ('src', 'images/cassie.jpg');
  }
}

// This takes references to the new button and the heading (from index.html) storing them inside variables
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

/* This function contains a prompt() function, which brings up a dialog box, similar to alert().
However prompt() asks the user to enter some data, storing it in a veriable after the user presses OK. Here, we are asking
the user to enter their name. Next we call on 'Web Storage API' localStorage, which allows us to store data in the browser and later retrieve it.
We use localStorage's setItem() function to create and store a data item called 'name', settings its value to the myName variable.
Finally, we set the textContent of the heading to a string plus the user's newly stored name.
*/
function setUserName(){
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null){
    setUserName();
  } else{
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Say hello to Cassie, ' + myName;
  }
}

/*
This block first uses the negation operator (logical NOT, represented by the !) to check whether the name data exists. If not, the setUserName() function is run to create it. 
If it exists (that is, the user set it during a previous visit), we retrieve the stored name using getItem() and set the textContent of the heading to a string, plus the user's name, as we did inside setUserName().
*/
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Say hello to Cassie, ' + storedName;
}

// Put the onclick event handler on the button. When clicked, the setUserName() function is run. This allows the user to set a new name, when they wish, by pressing the button: 
myButton.onclick = function(){
  setUserName();
}