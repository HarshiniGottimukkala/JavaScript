let reverse = (arr) => {
    let res = [];
    for(let i=arr.length-1 ; i>-1 ; i--){
        res.push(arr[i]);
    }

    return res;
}


let array = [6,5];
let reverseArray = reverse (array);
console.log(reverseArray);

