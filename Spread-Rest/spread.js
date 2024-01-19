 
 //Array
 let array = [1,2,3,4,5];

 console.log(array);

 let newArray = [...array,6,7,8];

 console.log(newArray);



 //Object

 let user = {
    name : 'abc',
    age : 20
 };

let newUser = {...user, place : 'kadapa'};

console.log(newUser);

//Combined Array


/* Write a function that takes two arrays of numbers as arguments and returns a new array with the elements from both arrays combined.
  */


let array1 =[1,2,3,4,5];
let array2 = [6,7,8,9]
let combinedArray = [...array1, ...array2];

console.log(combinedArray);
