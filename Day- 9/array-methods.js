let myArr = ["Fan", "Camera", 34, null, true];

// Array Methods
console.log(myArr.length); // Will print the length of the array

myArr.pop(); // Removes the last element of array
console.log(myArr);

myArr.push("Shubh"); // Adds the given element in the last index of the array
console.log(myArr);

myArr.shift(); // Removes the first element of the array
console.log(myArr);

myArr.unshift("Shubh"); // Appends the element in the first index of the array
console.log(myArr);

// Returns new length of array
const newLen = myArr.unshift("Shubh");
console.log(newLen);
console.log(myArr);

myArr.toString(); // Converts whole array into string format

d = [1,5,2,7,4,9];
d.sort();
console.log(d);