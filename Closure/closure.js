function printValue() {
    let value = "abc";
    function lmp(){
        return value;
    }
    return lmp();
}
let result = printValue(); 
console.log(result);
