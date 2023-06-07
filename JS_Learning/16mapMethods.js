const array1=[3,4,5,6,1]
const n=[]
for (i=0;i<=array1.length-1;i++)
{
    n.push(array1[i+2])
}
console.log(n);



const array = [3, 4, 5, 6, 1];
           // [5, 6, 7, 8, 3];

const arrayTransformed = [];
array.forEach( (currentValue) => {
    arrayTransformed.push(currentValue+2)
} );
console.log(arrayTransformed);

console.log("Using map()");
const arrayNew = array.map( (element) => {
   return element + 2;
} )
console.log(arrayNew);

const arrayOfNames = ["Rupesh Dhumal", "Rutuja Pawar", "Nayan", "Pralhad"];
const arrayNamesTransformed=[]

const arrayN = arrayOfNames.map( (element) => {
    return element.length;
 } )

console.log(arrayN);

console.log("1-function closure  2-function callback  3-function expression");







