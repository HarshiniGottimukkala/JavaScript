let sumOfArray = (arr) =>{
    let sum=0;
    for( let i=0; i<arr.length; i++){
        sum=sum+arr[i];
    }

    return sum;
}
let arr= [1,2,3];
let sumOfArrayElements = sumOfArray(arr);
console.log(sumOfArrayElements);