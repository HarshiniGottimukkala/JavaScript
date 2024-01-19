let global = 20;

console.log(`Global : ${global}`);
//console.log(`local : ${lc}`)

function local(){
    let lc = 10;
    console.log(`local : ${lc}`);
    console.log(`Global : ${global}`);
}
local();