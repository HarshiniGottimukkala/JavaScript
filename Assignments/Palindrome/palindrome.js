let palindrome = (string) => {
    let result = "";
    for(let i=0; i<string.length/2 ;i++){
        if(string[i] !== string[string.length-1-i]){
            return "not a palindrome"
        }else{
            return "It is a palindrome"
        }
    }
}

let str = "madam";
console.log(palindrome(str));