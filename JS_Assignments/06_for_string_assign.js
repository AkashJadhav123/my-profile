console.log("*********************Task-1*********************");
var vowelsCount=(str)=>
{
    var c=0;
    for (let index = 0; index < str.length; index++) 
    {
        if(str.charAt(index)=='a' || str.charAt(index)=='A'|| str.charAt(index)=='E' || str.charAt(index)=='e' || str.charAt(index)=='I'||
         str.charAt(index)=='i' || str.charAt(index)=='O' || str.charAt(index)=='o' || str.charAt(index)=='U' || str.charAt(index)=='u')
        {
            c++;
        }
    }
    return c;
}
var r=vowelsCount("JavaScript is the language of internet");
console.log(`total vowels present in string-'JavaScript is the language of internet' are: ${r}`);
console.log("---------------------------------------------------");
var r=vowelsCount("I am Angular Developer");
console.log(`total vowels present in string-'I am Angular Developer' are: ${r}`);
console.log("---------------------------------------------------");
var r=vowelsCount("Hard work and commitment is the key of success");
console.log(`total vowels present in string-'Hard work and commitment is the key of success' are: ${r}`);


console.log("*********************Task-1*********************");
function lastWordCharsCount(str)
{
    var c=0;

   // console.log(str.length);
    for (let index = str.length-1; index >=0; index--)
    {
            if (str.charAt(index)==" ")
            {
                break;
            }
            c++;
    }
    return c
}
var t=lastWordCharsCount("JavaScript is the language of internet")
console.log(`Last word count of string- "JavaScript is the language of internet" is :${t}`);
console.log("---------------------------------------------------");
var t=lastWordCharsCount("I am Angular Developer")
console.log(`Last word count of string- "I am Angular Developer" is :${t}`);
console.log("---------------------------------------------------");
var t=lastWordCharsCount("ard work and commitment is the key of success")
console.log(`Last word count of string- "ard work and commitment is the key of success" is:${t}`);

