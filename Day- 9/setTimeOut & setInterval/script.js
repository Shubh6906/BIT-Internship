// SetTimeout & SetInterval

log = () => {
    console.log("Hello!");
}

clear = setTimeout(log, 2000); // This function will run after 2000 miliseconds

clearTimeout(clear); // This will prevent the function from executing

clr = setInterval(log, 2000); // This function will run contineously after 2000 miliseconds 

clearInterval(clr); // It will stop the function from executing again & again