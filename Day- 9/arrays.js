var arr = [1,2,3,4,5,6,7];
console.log(arr);

for(var i = 0; i<arr.length; i++){
    console.log(arr[i]);
}

// Other method to print in console

arr.forEach(function(element){
    console.log(element);
})