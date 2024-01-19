//Fetch data from API

/* let url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
.then((response)=>{
    return response.json();
})
.then((data)=>{
   for(let item in data){
    document.write(data[item].email);
   }
}) */

//Post data to API

/* let url = "https://jsonplaceholder.typicode.com/users";

fetch(url,{
    method : "Post",
    body : JSON.stringify({
        name :'Myname',
        username : 'abc',
        email : 'abc@gmail.com' 
    }),
    headers : {
        'content-type' : 'application/json'
    }
})
.then((response)=>{
    return response.json();
})
.then((data)=>{
   console.log(data);
}) */



/* Write an asynchronous function using async/await to fetch data from a JSON API. */

let url = "https://jsonplaceholder.typicode.com/users";

let load =()=>{
    return new Promise((resolve, reject)=>{
        if(true){
            resolve(fetch(url));
        }else{
            reject("error occurred");
        }
    })
}

load()
.then((response)=>{
    return response.json();
})
.then((data)=>{
    for(let item in data){
        document.write(data[item].name);
    }
})

async function loading(){
    try{
        await load();
    }
    catch(err){
        console.log(err)
    }
}

loading();