let multipliaction = (number, range) =>{
    for(let i=1; i<=range; i++){
        console.log(`${number} * ${i} = ${number * i}`);
    }

    return true;
}

console.log(multipliaction(2, 10));