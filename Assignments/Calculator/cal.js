let calc = (a, b, op) => {

    switch (op) {
        case '+':
            console.log(`Addition : ${a + b}`);
            break;
        case '-':
            console.log(`Subtraction : ${a - b}`);
            break;
        case '*':
            console.log(`Multiplication : ${a * b}`);
            break;
        case '/':
            console.log(`Division : ${a / b}`);
            break;
        case '%':
            console.log(`Modulus : ${a % b}`);
            break;
        default:
            console.log('Incorrect details');
            break;
    }

}

calc(6,3,"+")
calc(6,3,"-")
calc(6,3,"*")
calc(6,3,"/")
calc(6,3,"%")
