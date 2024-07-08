// JSON - JavaScript Object Notation

// This is a simple object
// obj = {name: "Harry", length: 1};

// jso = JSON.stringify(obj); // It will convert the object into string format

// // We can find out the type of variable by the 'typeof' function
// typeof jso;

// console.log(typeof jso); 
// console.log(jso);

// Object inside object
obj = {name: "Harry", length: 1, a:{this: "that"}}; // 'a' is another object
jso = JSON.stringify(obj);

console.log(typeof jso);
console.log(jso);

// JS object also accepts single quotes

// But when converting to a JSON format, it is ensured that is a valid json. 
// Therefore it is converted into double quotes

// Parsing
parsed = JSON.parse(`{"name":"Harry","length":1,"a":{"this":"that"}}`);
console.log(parsed);