/* Create an object representing a person with properties like name, age and address. Use destructuring to extract these properties and create a new object with only the name and age. */

let person = {
    name :'ABC',
    age : 20,
    address : 'Kadapa'
};

let {name, age} = person;

console.log(name);
console.log(age);


let newPerson = {name, age};
console.log(newPerson);

