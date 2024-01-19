let fact = (number) => {
    let res = 1;
    for(let i=number; i>=1 ; i-- ){
        res = res * i;
    }
    return res;
}

let factorial = fact(5);
console.log(factorial);