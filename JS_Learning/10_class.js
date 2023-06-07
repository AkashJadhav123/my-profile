class Bank
{
    bankName;
    constructor(name)
    {
        this.bankName=name
    }
}
const sbiBank=new Bank("SBI Bank")
console.log(sbiBank);
console.log(sbiBank instanceof Bank);