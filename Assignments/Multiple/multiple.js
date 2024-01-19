let multiple = (a, b) => {
    if( b % a === 0){
        console.log(`${b} is multiple of ${a}`);
    }else{
        console.log(`${b} is not multiple of ${a}`);
    }
}

multiple(7, 35);