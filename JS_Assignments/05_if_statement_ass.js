console.log("*********************Task-1*********************");
function evenOrOdd(n)
{
    if(n%2==0)
    {
        console.log(`Givem number ${n} is even`);
    }
    if(n%2!=0)
    {
        console.log(`Givem number ${n} is Odd`);

    }
}
evenOrOdd(45)
evenOrOdd(70)
evenOrOdd(67)
evenOrOdd(98)

console.log("*********************Task-2*********************");
function eligibleForVote(n)
{
    if(n>=18)
    {
        console.log("You are eligible for vote");
    }
    if(n<18)
    {
        console.log("You are not eligible for vote");
    }
}
eligibleForVote(18)
eligibleForVote(20)
eligibleForVote(17)
eligibleForVote(40)

console.log("*********************Task-3*********************");

function checkCharacters(str)
{
    var l=str.length;
    if(l>=10)
    {
        return `String contains more then 10 character ie. ${l}`
    }
    if(l<10)
    {
        return`String contains less than 10 characters ie. ${l}`
    }
}
console.log( checkCharacters("JavaScript-ES6"));
checkCharacters("Akash")

console.log("*********************Task-3*********************");

// function startWith(str)
// {
//     if(str.startsWith("Java"))
//     {
//         console.log("String starts with java");
//     }
//     if(!str.startsWith("Java"))
//     {
//         console.log("String not starts with Java");
//     }
// }startWith("JavaScript Language")
// startWith("python")

console.log(function(str)
{
    if(str.startsWith("Java"))
    {
        return `String ${str} starts with "Java" `
    }
    return `String ${str} does not start with "Java"`
}
("JavaScript"));
