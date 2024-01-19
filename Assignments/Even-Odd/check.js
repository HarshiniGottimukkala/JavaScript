let check = (number) => {
    if(number % 2 == 0){
        return number * 2;
    }
    else{
        return number + 2;
    }
}

let ch = check (8);
console.log(ch)