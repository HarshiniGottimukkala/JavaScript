/* Write a function that generates a random number between 1 and 10 after a 1-second delay and returns a promise that resolves with the generated number. */

let random = () => {
    console.log(Math.floor(Math.random() * 10)+1);
}

let generateRandom = () =>{
    return new Promise((resolve, reject)=>{
        if(true){
            setTimeout(()=>{
                resolve()
            }, 1000);
        }
        else{
            reject();
        }
    })
}

generateRandom()
.then(() =>{
    random();
})
.catch(()=>{
    console.log("error")
})