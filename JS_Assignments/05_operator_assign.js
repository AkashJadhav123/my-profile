console.log("************************Task-1************************");
function squareOfWordLength(string)
{
    var len=string.length ** 2;
    return len;
}
console.log(`Square of "JavaScript" length is :`,squareOfWordLength("JavaScript"));
console.log(`Square of "GoogleChrome" length is :`,squareOfWordLength("Google Chrome"));
console.log(`Square of "Developer Smart" length is :`,squareOfWordLength("Developer Smart"));
console.log("************************Task-1************************");

function operations()
{
    var string="I am Angular Developer";
    console.log(`Given string is :${string}`);
    var len=string.length;
    console.log(`Length of given string is ${len}`);
    wordCount=string.split(" ");
    wordLength=wordCount.length;
    console.log(`Total no. of words present in string are ${wordLength}`);
    result=len / wordLength;
    console.log(`Result after dividing to length of string by count of words is :${result}`);

    mul=len * wordLength;
    console.log(`Result after multiplication into  length of string and count of words is ${mul}`);
}operations()

