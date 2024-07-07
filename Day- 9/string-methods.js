let sentence = "Hey, There! There!";

console.log(sentence.length); // Prints length of the sentence

console.log(sentence.indexOf("There!")); //Prints 4

console.log(sentence.lastIndexOf("There!")); // Prints 11

console.log(sentence.slice(0,3)); // Prints only elements from index 0 to 3

d = sentence.replace("Hey,", "Hello");
console.log(d, sentence);

d = d.replace("Hello", "Hey");
