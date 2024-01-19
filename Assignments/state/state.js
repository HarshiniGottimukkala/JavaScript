let state = (num) =>{
    if(num > 0){
        console.log("positive")
    }
    else if(num < 0){
        console.log("negative")
    }
    else if(num === 0){
        console.log("Zero")
    }
    else{
        console.log("not a number")
    }
}

state(0);
state(2);
state(-6);
state("A");