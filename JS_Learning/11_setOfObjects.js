class Bank {
    constructor(bankName, location, account, ifsc, interestRate ){
        this.bankName = bankName;
        this.location = location;
        this.account = account;
        this.ifsc = ifsc;
        this.interestRate = interestRate;
    }  
}
const sbiBank = new Bank("SBI Bank", "Wakad", "62514897564", "SBIN0004598",10.75 );
const axisBank = new Bank("Axis Bank", "Bajirao Road, Pune", "4597863258", "AXIS4567893", 10.50);
const yesBank = new Bank("Yes Bank", "Mumbai", "62514897564", "YES0004598", 14.75 );
const hdfcBank = new Bank("HDFC Bank", "Surat", "62514897564", "HDFC0004598", 9.75 );

const setOfBanks = new Set();
setOfBanks.add(sbiBank);
setOfBanks.add(axisBank);
setOfBanks.add(yesBank);
setOfBanks.add(hdfcBank);

for (const bank of setOfBanks) {
    console.log(bank.bankName);
}