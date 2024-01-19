let binary = (num) => {
    if((num & 1) === 0){
        console.log(`${num} is even`);
    }
    else{
        console.log(`${num} is odd`);
    }
}

binary(7);
binary(4);