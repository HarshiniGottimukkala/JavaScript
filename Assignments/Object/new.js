const person = {
    firstName: "ABC",
    lastName: "XYZ",
   age: 25,
   city: "ExampleCity"
};

person.email = "info@example.com";

console.log(person);

person.age = 26;

console.log(person);

delete person.city;

console.log(person);