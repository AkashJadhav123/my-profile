var greet='Good Morning';
console.log(typeof(greet));
var len=greet.length;
console.log("length of greet is :",len);

console.log('Finding the character at particular index');
var index=greet.charAt(3);
console.log(index);

console.log('Finding the last character');
var lastCharacter=greet.charAt(len-1);
console.log('Last character is',lastCharacter);

console.log('Find the index by character');
var indexOfM=greet.indexOf('M');
console.log('index of m is',indexOfM);

console.log("Index of char which is not available into the string: ", greet.indexOf('z'));

console.log("Index of o char: ", greet.indexOf('o'));
console.log("Index of o char using lastIndexOf(): ", greet.lastIndexOf('o'));

var replaceResult=greet.replace("Morning","Evening");
console.log("Replaced String",replaceResult);

console.log("Upper Case :",replaceResult.toUpperCase());

var myName=" Akash Jadhav ";
var myNameAfterTrim =myName.trim();
console.log("Removing extra start and end spaces using trim(): ",myNameAfterTrim, myName.length, myNameAfterTrim.length);

var count= myName.length - myNameAfterTrim.length;
console.log(count);
console.log(myName.trimStart());
console.log(myName.trimEnd());

console.log('include()');
console.log("Is substring Mor include int he sreet or not",greet.includes("Mor"));
console.log("Is substring Afternoon includes in the greet or not: ", greet.includes("Afternoon"));
console.log("Is substring o includes in the greet or not: ", greet.includes("o"));

console.log('slice() Method');
var sliceResult=greet.slice(5,12);
console.log(sliceResult);
console.log(greet.slice(2,5));

console.log("split() method");
var greet = "Good Morning";
var splitResult = greet.split(" ");
console.log(splitResult);
console.log(typeof splitResult);

console.log("split() method");
var greet = "Good Morning my dear friend";
var splitResult = greet.split(" ");
console.log(splitResult);
console.log("Total words: ", splitResult.length);

var myFriendList="Suraj,Prathmesh,Rushi";
var spliResult=myFriendList.split(" ");
console.log(spliResult.length);

var myFriendList = "Billgates, Stew Job, Elon Musk, Ratan Tata, Sundar Pichai, Satya Nadella, Narayan Murti, Nandan Nilekani, Larry Page, Surgey Brain, Tim Cook";
var splitResult1=myFriendList.split(",");
console.log(splitResult1);
console.log(splitResult1.length);