let findMaxNum = (a, b, c) => {
    if(a > b && a > c){
        console.log(`${a} is maximum number`);
    }
    else if(b > a && b>c){
        console.log(`${b} is maximum number`);
    }else{
        console.log(`${c} is maximum number`);
    }
}

findMaxNum(2, 3, 5);
findMaxNum(1, 8, 4);
findMaxNum(10, 8, 9);