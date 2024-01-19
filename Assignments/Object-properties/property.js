let propertyCount = (person) =>{
    return Object.keys(person).length;
}

let person = {
    name : 'harshini',
    age: 22,
    address : "Andhra",
    phone : '0000000000'
};

console.log(propertyCount(person));