/* Implement a counter function using closure that returns an object with two methods: increment( ) and getCount( ). 
The increment( ) method should increment a counter variable, and getCount( ) should return the current count value.
  */



function counter() {
    let count = 0;

    return {
        increment: function () {
            return count += 1;
        },
        getCount: function () {
            return count;
        }
    }
    
};

const myCounter = counter();
myCounter.increment();
myCounter.increment();
console.log(myCounter.getCount());