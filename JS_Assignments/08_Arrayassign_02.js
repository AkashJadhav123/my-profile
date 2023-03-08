const arrayNumberes=[20,31,40,25,23,11,29,9,60,2,11];
console.log(`arrayNumberes=[20,31,40,25,23,11,29,9,60,2,11]`);
console.log(`---------------------------------------------`);
console.error("*********************************************Task-1*********************************************");
console.log(`Total elaments available in given array are : ${arrayNumberes.length}`);

console.error("*********************************************Task-2*********************************************");
console.log(`First element in array is : ${arrayNumberes[0]}`);
console.log(`Last element in given array is : ${arrayNumberes[arrayNumberes.length-1]}`);

console.error("*********************************************Task-3*********************************************");
console.log(`Third last element in the array is : `,arrayNumberes[arrayNumberes.length-3]);

console.error("*********************************************Task-4*********************************************");
console.log(`All even numbers in given array are :`);
let index=0;
let allEvenArray=[]
while(index<=arrayNumberes.length-1)
{
    if(arrayNumberes[index]%2==0)
    {
       allEvenArray.push(arrayNumberes[index])   
    }
    index++
}
console.log(allEvenArray);
console.error("*********************************************Task-5*********************************************");
console.log(`All odd numbers in given array are :`);
let allOddArray=[]
for( let i=0;i<=arrayNumberes.length-1;i++)
{
    if(arrayNumberes[i]%2!==0)
    {
        allOddArray.push(arrayNumberes[i])
    }
}
console.log(allOddArray);
console.error("*********************************************Task-6*********************************************");
let array1=[]
let sum1=0;
for(let i=0;i<=arrayNumberes.length-1;i++)
{
    if(i%2==0)
    {
        array1.push(arrayNumberes[i])
        sum1=sum1+arrayNumberes[i]
    }

}
console.log(`All Even positioned numbers in given array are :`,array1,`And sum is : ${sum1}`);


console.error("*********************************************Task-7*********************************************");

let ind=0
 let array=[];
let sum=0;
while(ind<=arrayNumberes.length-1)
{
    
    if(ind%2!==0)
    {
        array.push(arrayNumberes[ind])
        sum=sum+arrayNumberes[ind]
    }
    ind++
}
console.log(`All odd positioned numbers in given array are :`,array,`And sum is : ${sum}`);

console.error("*********************************************Task-8*********************************************");
let allSum=0;
function sumOfAllElements()
{
    for( let i=0;i<=arrayNumberes.length-1;i++)
    {
        allSum=allSum+arrayNumberes[i]
    }
}sumOfAllElements()
console.log(`Sum of all elemants present in an array is : ${allSum}`);

console.error("*********************************************Task-9*********************************************");

let mulOf5=[]
for(let i=0;i<=arrayNumberes.length-1;i++)
{
    if(arrayNumberes[i]%5==0)
    {
        mulOf5.push(arrayNumberes[i])
    }
}
console.log(`The numbers multiple of '5' are :`,mulOf5);

console.error("*********************************************Task-10*********************************************");
console.log(`Is number '115' is available in array:`,arrayNumberes.includes(115));

console.error("*********************************************Task-11*********************************************");
console.log(`Is number '23' is available in array:`,arrayNumberes.includes(23));

console.error("*********************************************Task-12*********************************************");
arrayNumberes.splice(3,0,55,66)
console.log(`Array after inserting '55,66' elements is :`,arrayNumberes);


console.error("*********************************************Task-13*********************************************");
console.log("Deleted elements are :",arrayNumberes.splice(4,3),"After deleting Array is :",arrayNumberes);