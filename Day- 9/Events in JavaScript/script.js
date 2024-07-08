// Events in JavaScript

// onclick funtion
function clicked(){
    console.log("The button was clicked");
}

// onload function
// window.onload = function(){
//     console.log("The window is loaded");
// }

// firstcontainer.addEventListener('click', function(){
//     document.querySelectorAll('.container')[1].innerHTML = "<b> Clicked </b>";
//     console.log("Clicked on container");
// })

// firstcontainer.addEventListener('mouseover', function(){
//     console.log("Mouse on container");
// })

// firstcontainer.addEventListener('mouseout', function(){
//     console.log("Mouse out of container");
// })

let prevHTML = document.querySelectorAll('.container')[1].innerHTML;

firstcontainer.addEventListener('mouseup', function(){
    document.querySelectorAll('.container')[1].innerHTML = prevHTML;
    console.log("Mouse up when clicked on container");
})

firstcontainer.addEventListener('mousedown', function(){
    document.querySelectorAll('.container')[1].innerHTML = "<b> Clicked </b>";
    console.log("Mouse down when clicked on container");
})