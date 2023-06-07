
console.log("***Atithmstic Operstor***");
var n1=15;
var n2=5;
var result=n1+n2;
console.log(`Addition is ${result}`);

result =n1-n2;
console.log(`substraction is ${result}`);

result=n1 ** n2;
console.log(`Exponential is ${result}`);

result =n1/n2;
console.log(`division is ${result}`);

resul =n1%6;
console.log(`Reminder is ${resul}`);

console.log(`Caparison operators `);
 var num3 = "10";
 var num4 = 10;
 console.log(num3==num4); // 10==10
 console.log(num3===num4);

 console.log("***Ternaary operator***");
var marks=70;
var result=marks>=60 ?"Allow him " :"Dont allow";
console.log(result);

var age=20;
var res=age>=21 ?true : false;
console.log(res);

console.log("Even or Odd");
var myNumber=7;
var result=myNumber%2==0 ?"Even" : "Odd";

function wordLength(word){
    var wordLength = word.length;
    var result = wordLength%2==0 ? "EVEN" : "ODD";
    return result;
 }
 var result = wordLength("JavaScript");
 console.log(`Word "JavaScript" has ${result} length` );
 // var result = wordLength("Google");
 console.log(`Word "Google" has ${wordLength("Google Chrome")} length` );

 function maleMarriageEligibility(gender, age, boyName){
    var result = (gender=="Male" && age>=21) ? `Hey ${boyName} you are eligible for marriage` : " No Try next time" ;
    return result;
 }
  var result = maleMarriageEligibility("Male", 25, "Billgates");
  console.log(result);