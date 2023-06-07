const mapOfNumbers = new Map();
mapOfNumbers.set("One", 1);
mapOfNumbers.set("Two", 2);
mapOfNumbers.set("Three", 3);
mapOfNumbers.set("One", 11);
mapOfNumbers.set("Five", 5);
mapOfNumbers.set("Six", 6);


mapOfNumbers.forEach((key,value)=>{
    console.log(key,value);
})