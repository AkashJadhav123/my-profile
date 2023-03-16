function Bank(bankName,location,ifscCode,branchCode)
{
    this.bankName=bankName;
    this.location=location;
    this.ifscCode=ifscCode;
    this.branchCode=branchCode;
 
    console.log(`Bank details are : ${bankName}, ${location},${ifscCode},${branchCode}`);
}
//Bank.time="9 Am"
Bank.prototype.openTime="9 AM IST"
Bank.prototype.closeTime="6 PM IST"

let yesBank=new Bank("Yes Bank","Pune","sbi4587","485478")
// console.error("-------------------------------------------------------------------------");

let sbiBank=new Bank("SBI Bank","Delhi","boi846",486578)

let mahsBank=new Bank("Maharashtra","wakad","mah796544",2364028)

let axisBank=new Bank("Axis Bank","Sangli","axis4869",48544)
 console.error("-------------------------------------------------------------------------");

console.log(`SBI Bank open at- '${sbiBank.openTime}' And close at-'${sbiBank.closeTime}'`);
console.error("-------------------------------------------------------------------------");

console.log(`'${axisBank.bankName}'  closes at '${axisBank.closeTime}'`);
 console.error("-------------------------------------------------------------------------");

console.log(`'${yesBank.bankName}' with branchcode-'${yesBank.branchCode}' opens at '${yesBank.openTime}'`);
console.error("-------------------------------------------------------------------------");

//console.log(yesBank);

