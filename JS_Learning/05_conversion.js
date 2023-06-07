console.log("Implicit conversion to String");
result='3'+2;   
console.log(result);          //32

result ='3'+true;
console.log(result);        //3true

r='3'+undefined;
console.log(r);             //3undefined

r='3'+null
console.log(r);             //3null


console.log('Implicit boolean conversion to number');
r='4'-true;
console.log(r);             //3

r=4+true;
console.log(r);             //5

r='4'-false;
console.log(r);             //4

console.log('Implicit String conversion to number');

r='4'+'2'
console.log(r);             //42

r='4'-'2'
console.log(r);             //2

r='4'-2
console.log(r);             //2

r='4'*2
console.log(r);             //8

r='4'/2
console.log(r);             //2

console.log("Undefined used with number, boolean or null given NaN");
r=4+undefined;
console.log(r);             //NaN

r=4-undefined;
console.log(r);             //NaN

r=true+undefined
console.log(r);             //NaN

r=null+undefined
console.log(r);             //NaN

console.log("Explicit conversion: convert number strings and boolean values to number,in that case we can use number()");

//string to number
r=Number('324')
console.log(r);             //324

r=Number('324e-1')
console.log(r);             //32.4

//boolean to number

r=Number(true)
console.log(r);             //1

r=Number(false)
console.log(r);             //0

console.log("Explicit conversion: invalid string tonumber return NaN");
r=Number('hello');
console.log(r)              //NaN

r=Number(undefined)
console.log(r);             //NaN

r=Number(NaN);
console.log(r);             //NaN









