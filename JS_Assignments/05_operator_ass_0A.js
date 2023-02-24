console.log("************************Task-1************************");

function greaterNumber( v1, v2)
{
   var result=v1 >= v2 ? `number ${v1} is greater than ${v2}` : `number ${v2} is greater than ${v1}`;
   console.log(result);
}greaterNumber(10,-10);
 greaterNumber(800,899);

 console.log("************************Task-2************************");

function isEvenOrOdd(num)
{
    result= num % 2==0 ? true : false;
    return result;
} var r= isEvenOrOdd(29)
console.log(`Number "29" is Even = ${r}`);
console.log("-------------------------------------");
var r= isEvenOrOdd(44)
console.log(`Number "44" is Even = ${r}`);
console.log("-------------------------------------");
var r= isEvenOrOdd(0)
console.log(`Number "0" is Even = ${r}`);
console.log("-------------------------------------");
var r= isEvenOrOdd(101)
console.log(`Number "101" is Even = ${r}`);

console.log("************************Task-3************************");
function wordLength(str)
{
    var l=str.length % 2==0 ? `The string ${str} has "Even" length` : `The string ${str} has "Odd" length`;
    return l;
}
console.log( wordLength("JavaScript"));
console.log("-------------------------------------");
console.log( wordLength("Developer"));
console.log("-------------------------------------");
console.log( wordLength("Google"));


