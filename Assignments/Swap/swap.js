let swap = (a, b) => {

    a = a + b;
    b = a - b;
    a = a - b;

    a *= 2;
    b *= 2;

    console.log(`a value is ${a} \nb value is ${b}`);
}
swap(5,6);