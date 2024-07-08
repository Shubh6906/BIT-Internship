// DOM Manipulation

let elem = document.getElementById("click"); // Prints the element of the ID
console.log(elem);

let elembyClass = document.getElementsByClassName("container"); // Prints the element of the class
console.log(elembyClass);

// elembyClass[0].style.background = "yellow"; // Changes the color of the first element of the class

elembyClass[0].classList.add("bg-primary"); // Adds the given class to the first elemnent of the class
elembyClass[0].classList.add("text-success"); // Adds the given class to the first elemnent of the class

elembyClass[0].classList.remove("text-success"); // Removes the class 

elembyClass[0].innerHTML; // Prints the HTML code of that element in the console
console.log(elembyClass.innerHTML);

elembyClass[0].innerText; // Prints the text of that element in the console
console.log(elembyClass.innerText);

tn = document.getElementsByTagName('div'); // Prints all the button elements in the console
console.log(tn);


// Appends an element
createdElem = document.createElement('p');
createdElem.innerText = "This is a paragraph created in JS file."
tn[0].appendChild(createdElem);

createdElem2 = document.createElement('b');
createdElem2.innerText = "This is a bold created in JS file."
tn[0].appendChild(createdElem2, createdElem);

// removeChild(element); ---> Removes an element 

document.location(); // Shows location of the document

document.title(); // Shows title of the document

document.URL(); // Gives the URL of the document

document.scripts(); // Gives all the scripts created

document.links(); // Gives the html links

document.forms(); // Shows forms in a page

document.images(); // Shows images of that page

document.domain(); // Shows the domain of the document without slashes

// Selecting Using Query

sel = document.querySelector('.container'); // Gives the first element of the container class
console.log(sel);

sel = document.querySelectorAll('.container'); // Gives all elements of the container class
console.log(sel);

