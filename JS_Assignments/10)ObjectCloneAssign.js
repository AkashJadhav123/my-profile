console.log("*****************************************Task-1*****************************************");
console.log("Shallow cloning");
const arrayNums=[20,3,4,56,90,400,49]
const clonedArrayNum1=arrayNums;
clonedArrayNum1.push(55,66);
console.log(`original array is :-`,arrayNums);
console.log(`cloned array is :-`,clonedArrayNum1);

console.log("*****************************************Task-1*****************************************");
console.log("Deep cloning using spread operator");
let clonedArrayNum2=[...arrayNums]
clonedArrayNum2.push(10,25)
console.log(`Original array is :-`,arrayNums);
console.log(`updated array with spread operator :-`,clonedArrayNum2);

console.log("*****************************************Task-3*****************************************");
let arrayEven=[2,30,14,8]
console.log();
let mergeArray=[...arrayEven,...arrayNums]
console.log(`Array after merge arrayEven with arrayNums `,mergeArray);

console.error("*****************************************Task-3*****************************************");
const employee_info=
{
    emp_id : 27,
    emp_name : "John Doe",
    salary: {
        july_month : "40,0000INR",
        aug_month : "50,0000INR",
        jun_month : "65,0000INR"
    },
    adress :{
        locality:{
            colony : "OM Vrindavan Society ",
            street : "Kanch Pokali,431202"
        },
        city : "Mumbai",
        state : "Maharashtra",
        country : "India"
    },
    mobiles: ["+91 8600 3456 88","1800-4567 32","+91- 9096 5678 77"]
}
console.error("Employee Details: Adress");
for (const key in employee_info.adress) {
   // if (Object.hasOwnProperty.call(employee_info.adress, key)) {
        const element = employee_info.adress[key];
        console.log(`${key} : ${element}`);
        
    }

console.error("Employee details : mobiles");
console.log(employee_info.salary);

console.error("*****************************************Task-3*****************************************");

console.log("Performing deep cloning using JSON.stringify()");
let deepClone=JSON.parse(JSON.stringify(employee_info))

console.error("Updating property july_month on cloned object");
deepClone.salary.july_month="80,000INR"

console.error("Updating property country on original object");
employee_info.adress.country="United Kingdom"

console.log(employee_info);











