let stepOne = ((callback)=>{
    console.log("I am step 1");
    callback();
});
let stepTwo = ((callback)=>{
    console.log("I am step 2");
    callback();
});
let stepThree = ((callback)=>{
    console.log("I am step 3");
    callback();
});
let stepFour = ((callback)=>{
    console.log("I am step 4");
    callback();
});
let stepFive = (()=>{
    console.log("I am step 5");
});

stepOne(()=>{
    stepTwo(()=>{
        stepThree(()=>{
            stepFour(()=>{
                stepFive();
            })
        })
    })
});

