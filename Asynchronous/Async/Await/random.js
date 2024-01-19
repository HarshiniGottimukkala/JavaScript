/* Rewrite the previous task's ( Task - 77 ) function using async/await syntax to generate a random number after a 1-second delay. */

let random = () => {
    console.log(Math.floor(Math.random() * 10)+1);
}

let generateRandom = () =>{
    return new Promise((resolve, reject)=>{
        if(true){
            setTimeout(()=>{
                resolve(random())
            }, 1000);
        }
        else{
            reject("Error");
        }
    })
}

async function generate(){
    try{
        await generateRandom();
    }
    catch(err){
        console.log(err);
    }
}

generate();