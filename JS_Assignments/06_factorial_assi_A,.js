function factorialOfNum(num)
{
    
    //if(num==undefined || num==null || num==0 || typeof(num)!="number" || isNaN(num))
    if(typeof num != "number" || num == 0 || isNaN(num))
    {
        //console.log(`${num} is not a valid entry to check factorial.Please enter a valid number`);
       return `${num} is not a valid entry to check factorial.Please enter a valid number`
    }
    else
    {
    var mul=1;
    for (let index = num; index >= 1; index--)
    {
              mul=mul*index
    }
    return `Factorial of no '${num}' is : ${mul}`
    }
    
}
console.log(factorialOfNum(5));
console.log("---------------------------------------------------");
console.log(factorialOfNum(3));
console.log("---------------------------------------------------");
console.error(factorialOfNum(null));
console.log("---------------------------------------------------");
console.error(factorialOfNum(undefined));
console.log("---------------------------------------------------");
console.log(factorialOfNum(9));
console.log("---------------------------------------------------");
console.log(factorialOfNum(8));
console.log("---------------------------------------------------");
console.error(factorialOfNum(0));

/*
function factorial(num)
{
 var result=1;
 if(typeof num != "number" || num == 0 || isNaN(num))
  {
    return `You have entered ${num}. please enter the valid input`;
  }
  for (let index = 1; index <= num; index++) 
  {
     result = result * index;
  }    
  return `The factorial of ${num} is '${result}'`;
}
console.log("Task 1. Find the factorial of the given number");
console.log("----------------------------------------------------");
console.log(factorial(5));
console.log(factorial(3));
console.error(factorial(null));
console.log(factorial(8));
console.error(factorial(undefined));
console.log(factorial(9));
console.error(factorial(0));
console.error(factorial(NaN))
console.log("----------------------------------------------------");*/