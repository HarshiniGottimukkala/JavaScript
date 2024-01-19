let vowels = (str) => {
    let sum = 0;
    for(let i=0; i<=str.length; i++){
        if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
            sum += 1;
        }
    }

    return sum;
}

console.log(vowels('nani'));