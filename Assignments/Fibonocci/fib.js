let fibSeries = (number) => {
    let num1 = 0,num2 =1,sum = 0, res = [];
    for(let i= 0; i<=number; i++){
        res.push(num1);
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return res;
}

let fibonocci = fibSeries(6);
console.log(fibonocci);