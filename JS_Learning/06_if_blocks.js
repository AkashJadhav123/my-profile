var n=10;
if(n>0)
{
    console.log(`num ${n} is positive`);
}
console.log(`end`);

function checkEvenOdd(num)
{
    if(num%2==0)
    {
        return `Even`;
    }
    else
    {
        return `Odd`;
    }
}
var result=checkEvenOdd(45)
console.log(`Given no. 45 is ${result}`);

function maleMarriageEligibility(gender,age,nam)
{
    if(gender=="Male" && age>=21)
    {
        console.log(`U are eligible`);
    }
    else
    {
        console.log(`U ar not Eligible`);
    }
}
maleMarriageEligibility("Male",25,"AJ")
