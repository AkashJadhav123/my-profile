const arrayNumbers=[20,11,40,25,37,49,9,90,60,2,19]
console.log("array is :",arrayNumbers);
console.log("---------------------------------------------------");

const r=arrayNumbers.filter(value=>{
    return value>50
})
console.log("Numbers which are greater than '50' :" ,r);
console.log("---------------------------------------------------");
const r1=arrayNumbers.filter(value=>value%2==0)
console.log("All even numbers are :",r1);

console.log("---------------------------------------------------");
const r3=arrayNumbers.filter(value=>value%2!==0)
console.log("All Odd numbers are :",r3);

console.log("---------------------------------------------------");
const r4=arrayNumbers.filter((value)=>{
    return value%5==0
})
console.log("All numbers whicha arw multiple of :",r4);

console.log("---------------------------------------------------");
const r5=arrayNumbers.filter((value)=>{
    return value>=20 && value<=50
})
console.log("Numbers between '20' and '50' are :",r5);



