let type = (num) => {
    if(typeof(num) === 'number'){
        console.log(`${num} is type of number`);
    }
    else{
        console.log(`${num} is not type of number`)
    }
}

type("8");
type(12);
