let isPrime = (number) => {
    let prime = true;

    if (number === 1) {
        console.log("neither prime nor composite number");
    }
    else if (number > 1) {

        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                prime = false;
                break;
            }
        }
        if (prime) {
            return `${number} is a prime number`;
        } else {
           return `${number} is not a prime number`;
        }
    }

}

let checkPrime = isPrime(2);
console.log(checkPrime);