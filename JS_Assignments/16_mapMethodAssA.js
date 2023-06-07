const arrayNumbers=[20,11,40,25,23,11,9,31,60,2,19]

const add10=[]
arrayNumbers.forEach(value=>{
    add10.push(value+10)
})
console.log("Array after adding 10 in each element :",add10);
console.log("------------------------------------------------------------------------------------------------");


const squareArray=[]
arrayNumbers.forEach(value=>{
    squareArray.push(value**2)
})
console.log("Array after square elements :",squareArray);
console.log("------------------------------------------------------------------------------------------------");


const addIndex=[]
arrayNumbers.forEach((value,index)=>{
    addIndex.push(value+index)
});
console.log("Arry after adding index value into element :",addIndex);
console.log("------------------------------------------------------------------------------------------------");









