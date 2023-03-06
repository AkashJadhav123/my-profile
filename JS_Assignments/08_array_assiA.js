const arraySeasonalFruits=["Banana","Orange","Apple","Mango","Water Melon"]
console.error("*********************************************Task-1*********************************************");
console.log(arraySeasonalFruits);
console.error("----------------------------------------------------------------")
console.log(`First Element in Array is : '${arraySeasonalFruits[0]}'`);
console.log(`Last elemnt in array is : '${arraySeasonalFruits[4]}'`);

console.error("*********************************************Task-2*********************************************");

//arraySeasonalFruits.unshift("Papaya");
arraySeasonalFruits.splice(0,0,"Papaya")
console.log(`Papaya is Added before Banana :`,arraySeasonalFruits);

console.error("*********************************************Task-3*********************************************");
let removingMango=arraySeasonalFruits.splice(4,1)
console.log(`Element '${removingMango}' is deleted from array :`,arraySeasonalFruits);

console.error("*********************************************Task-4*********************************************");
var r=arraySeasonalFruits.push("pineapple")
console.log(` 'Pineapple' element is added in array :`,arraySeasonalFruits)

console.error("*********************************************Task-5*********************************************");
arraySeasonalFruits.splice(4,0,"Daragon Fruit")
console.log(`'Dragon fruit' is added before 'Water Melon'`,arraySeasonalFruits);

console.error("*********************************************Task-6*********************************************");
arraySeasonalFruits.splice(2,1,"Kiwi")
console.log(`'Orange' is replaced with 'Kiwi' :`,arraySeasonalFruits);

console.error("*********************************************Task-7*********************************************");
let result=arraySeasonalFruits.slice(1,4)
console.log(`Logging the elements starting index from 1 to 4 :`,result);

console.error("*********************************************Task-8*********************************************");
let r4=arraySeasonalFruits.slice(arraySeasonalFruits.length-3);
console.log(`Last 3 elements of array :`,r4);
