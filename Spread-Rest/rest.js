function add(...array){
    let sum = 0;
    for(let i of array){
        sum += i
    }

    return sum
}

console.log(add(2,5,4,6));
console.log(add(2,5));