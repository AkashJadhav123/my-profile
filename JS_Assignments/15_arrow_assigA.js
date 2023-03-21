
console.log("************************Task-1************************");
let first=()=>
{
    console.log("Good Morining, Today is Monday");
}
first()

console.log("************************Task-2************************");

let second = (arg1,arg2,arg3=1) =>
{
    console.log("Multiplication is :",arg1*arg2*arg3);
}
second(5,5,2)
second(10,4)

console.log("************************Task-3************************");

let third= (a1,a2,a3,a4,a5) =>
{
    return a1+a2+a3+a4+a5
}
console.log("Addition is :",third(100,200,100,349,756));
console.log("Addition is :",third("I am"," learning"," ES6"," features", "in depth"));





