
const array = [3, 4, 5, 8, 90, 50, 1, 44, 78, 51 ];
let sumOfArrayElement = array.reduce( (runningTotal, value) => {
    return runningTotal+value;
} );
console.log(sumOfArrayElement);

// Find the even numbers from the given array and sum it
const arrayEven = array.filter( (element) => {
    return element%2==0;
} );
console.log(arrayEven);
const sumEven  = arrayEven.reduce( (runningTotal, value) => {
    return runningTotal+value;
} );
console.log(sumEven);

const arrayNum = [3, 4, 12, 8, 90, 50, 1, 15, 78, 21 ];
// Find the numbers which are multiple of 3 from the given array and sum it
console.log(" Find the numbers which are multiple of 3 from the given array and sum it");
const sum = arrayNum.filter( (element)=> {
   return element%3==0;
}).reduce( (runningTotal, value) => {
    return runningTotal + value;
} );
console.log(sum);

console.log("short code for above");
// Find the numbers which are multiple of 3 from the given array and sum it
console.log(" Find the numbers which are multiple of 3 from the given array and sum it");
const sumMultipleOf3 = arrayNum.filter( element => element%3==0)
.reduce( (runningTotal, value) => runningTotal + value);
console.log(sum);









