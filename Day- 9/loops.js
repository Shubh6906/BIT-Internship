// For Loop Syntax
var arr = [1,2,3,4,5,6,7];
console.log(arr);

for(var i = 0; i<arr.length; i++){
    console.log(arr[i]);
}

// While Loop Syntax
var j = 0;
while(j<arr.length){
    console.log(arr[j]);
    j++;
}

// Do While Loop
do{
    console.log(arr[j]);
    j++;
} while(j<arr.length);

// Condition in for loop
for(var i = 0; i<arr.length; i++){
    if(i==2){
        // break;
        continue; // Here only 2nd element will not be printed. i.e., 3 will not be printed
    }
    console.log(arr[i]);
}