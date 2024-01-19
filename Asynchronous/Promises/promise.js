let stepOne = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            console.log("I am step 1");
            resolve();
        } else {
            reject("error in step 1");
        }
    });
};

let stepTwo = () => {
    return new Promise((resolve, reject) => {
            console.log("I am step 2");
    });
};
let stepThree = () => {
        console.log("I am step 3");
};

stepOne()
    .then(() => {
        stepTwo();
    })
    .then(() => {
        stepThree();
    })
    .catch((err) => {
        console.log(err);
    });

