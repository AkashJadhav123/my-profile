console.log("*****************************************Task-1*****************************************");

let bankSbi =
{
     name : "SBI",
     locaton : "Pune",
     ifsc : "sbi48320",
     accNo : 45930254
}
let bankLocation=
{
    street : "wakad",
    city : "pune",
    pinCode : 416403
}
console.error("-------------------------------------------------------------------------");


console.log("Cloning using Object.assign operator");
let clone1=Object.assign(bankSbi,bankLocation)
console.table(clone1);
console.log(`${clone1.name},${clone1.locaton},${clone1.ifsc},${clone1.accNo},${clone1.street},${clone1.city},${clone1.pinCode}`);
console.error("-------------------------------------------------------------------------");


console.log("Cloning using spread operator");
let clone2={...bankSbi,...bankLocation}
console.table(clone2);


// for (const key in clone2) {
//     if (Object.hasOwnProperty.call(clone2, key)) {
//         console.log(`${key} : ${clone2[key]}`);
        
//     }
// }
console.log(`name :${clone2.name},locaton :${clone2.locaton},ifsc :${clone2.ifsc},accNo :${clone2.accNo},street :${clone2.street},city :${clone2.city},pinCode :${clone2.pinCode}`);

console.log("*****************************************Task-2*****************************************");

let rateOfInterest=
{
    homeLoaninterest :10.5,
    personalLoanInterest : 11,
    duelInterest : 11.2
}

let sbiDetails={...bankSbi,...bankLocation,...rateOfInterest}
console.log(` Name :${sbiDetails.name},location :${sbiDetails.locaton},ifsc :${sbiDetails.ifsc},accNo :${sbiDetails.accNo},street :${sbiDetails.street},city :${sbiDetails.city},pinCode :${sbiDetails.pinCode},homeLoaninterest :${sbiDetails.homeLoaninterest},personalLoanInterest :${sbiDetails.personalLoanInterest},duelInterest :${sbiDetails.duelInterest}`);
//console.table(sbiDetails);

// for (const key in sbiDetails) {
//     if (Object.hasOwnProperty.call(sbiDetails, key)) 
//     {
//         console.log(`${key} : ${sbiDetails[key]}`);
//     }
// }

console.log("asdfghjytrewsdf");
for (const iterator of Object.entries(sbiDetails)) 
{
    console.log(`${iterator}`);
}


