let merge = (object1, object2) => {
    let newObject = Object.assign({}, object1, object2);
    return newObject;

}

let obj1 = {
    name: 'Harshini'
};
let obj2 = {
    age: '22',
    place : 'abc'
};
console.log(merge(obj1, obj2));