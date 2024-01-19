let natural = (n) => {
    if(n<=0){
        return("not a natural number")
    }
    for(let i=1; i<=n; i++){
        console.log(i);
    }

}

let naturalNumber = natural(1);
console.log(naturalNumber);