let array = [20,'abc',true];
console.log(array);


let [ele1, ele2, ele3] = array;

console.log(ele1); //20
console.log(ele2); //ABC
console.log(ele3); //true

let [n1,, n2] = array;

console.log(n1);
console.log(n2);
