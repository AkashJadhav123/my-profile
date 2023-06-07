var reversString =function(givenString)
{
    var r="";
    for(let i=givenString.length-1;i>=0;i--)
    {
        var charat=givenString.charAt(i);
        r=r+charat;
    }
    return r;
}
console.log(reversString("JS the language of string"));


var reves =function(givenString)
{
    for(let i=givenString.length-1;i>=0;i--)
    {
        var charat=givenString.charAt(i);
        console.log(charat);
    }
    
   // return r;
}
reves("JS the language of");

console.log("To reverse the last word only");
var reverseStr = function(str){ // str = "Do it anyhow"
    var reverse = ""; // wohyna
    for (let index = str.length-1 ; index >= 0; index--) {
       var char = str.charAt(index);// o
       if(char == " "){
            break;
       }
       reverse = reverse + char; // "w"+"o" ==> "wo"
    }
    return reverse;
}
var result = reverseStr("Do it anyhow"); 
console.log(`Reverse last word : ${result}`);

console.log("***********counting the total vowels in given string **************");

console.log("********** Counting the spaces *********");

var str="I am angular champ"
for(let i=0;i<=str.length-1;i++)
{ 
    var count=0;
    if(str.charAt(i)==" ")
    {
        count=count+1
    }
     
}
console.log(count);



console.log("===============================================");
const str10 = "GavaScript is awesome"

function reverseAString(str) {
    // write your solution here
    var rstr="";
   for(let i=str.length-1;i>=0;i--)
   {
    rstr=rstr+str.charAt(i);
    
   }
  // console.log(rstr);
  return rstr
}
console.log(reverseAString(str10));

console.log("================================");
console.log("Reversing a number");

const num = 3849;
let numr=""
function reverseGivenInteger(num) {
    // write your solution here
   let rev=`${num}`
   console.log('type is chsnged',typeof rev,rev);
   for(let i=rev.length-1;i>=0;i--)
   {
    numr=numr+rev.charAt(i)
   }
    return numr
}

console.log(`Reversed integer is: ${reverseGivenInteger(num)}`)