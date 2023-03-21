const arrayNumbers=[1,-7,40,502,-77,91,0,108,89,-601]

console.log("************************Task-1************************");
console.log("Array elements with index");
arrayNumbers.forEach((element,index)=>{
    console.log("index :",index,", value",element);
});
console.log("************************Task-2************************");
console.log("positive numbers");
arrayNumbers.forEach(element => {
    if(element>=0)
    {
        console.log(element);
    }
});
const negativeArray=[]
console.log("************************Task-3************************");
console.log("Negative numbers");
arrayNumbers.forEach((element)=>{
    if(element<0)
    {
        negativeArray.push(element)
    }
    // if(element.startsWith("-"))
    // {
    //     negativeArray.push(element)
    // }
});
console.log(negativeArray);
// negativeArray.forEach(element=>{
//     console.log(element);
// })
console.log("************************Task-4************************");
console.log("All even numbers");
let evenNum=[]
arrayNumbers.forEach(element => {
    if(element%2==0)
    {
        evenNum.push(element)
    }
});
for (i=0;i<evenNum.length;i++) {
    console.log(evenNum[i]);
}
let sum=0
console.log("************************Task-5************************");
arrayNumbers.forEach(element=>{
    sum=sum+element
});
console.log("Sum of all elements",sum);
console.log("************************Task-6************************");
arrayNumbers.forEach((element,index)=>{
if(index%2==0)
{
    console.log(element)
}
})




