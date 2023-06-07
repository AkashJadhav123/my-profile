let arrayRollNumbers=[113,45,56,11,32,45,109,799,56,45]
console.log("Given array is :",arrayRollNumbers);
console.log("---------------------------------------------------");
// const t=[]
// for(let i=arrayRollNumbers.length-1;i>=0;i--)
// {
//        t.push(arrayRollNumbers[i]);
// }
// console.log(t);

console.log(temp=arrayRollNumbers.sort());
console.log("---------------------------------------------------");
let ascending=arrayRollNumbers.sort((a,b)=>{
       return a>b ? 1 : -1
})
console.log("Sorted array in ascending order",ascending);

console.log("---------------------------------------------------");
console.log("The greatest number in array is :",ascending[ascending.length-1]);
console.log("---------------------------------------------------");
console.log("The Smallest number in array is :",ascending[0]);

console.log("---------------------------------------------------");
// let removeDuplicates=new Set(arrayRollNumbers)
// console.log("Array after removed duplicate elements",[...removeDuplicates]);

let r=[...new Set(arrayRollNumbers)]
console.log("Array after removed duplicate elements",r);




























