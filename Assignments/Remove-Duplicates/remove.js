let removeDuplicates = (array) => {
    let newArray = [];
    for(let i=0; i<array.length; i++){
        if(newArray.indexOf(array[i]) === -1){
            newArray.push(array[i])
        }
    }

    return newArray;
}

let array = [1,2,2,3];

let removeDuplicatesFromArray = removeDuplicates(array);

console.log(removeDuplicatesFromArray);