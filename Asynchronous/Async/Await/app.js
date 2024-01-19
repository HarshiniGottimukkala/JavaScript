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
        if (false) {
            console.log("I am step 2");
            resolve();
        } else {
            reject("error in step 2");
        }
    });
};
let stepThree = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            console.log("I am step 3");
            resolve();
        } else {
            reject("error in step3");
        }
    });};

 async function working(){
    try{
        await stepOne();
        await stepTwo();
        await stepThree();
    }
    catch(err){
        console.log(err);
    }
 }

 working();