class Bank
{
    constructor(Name,Location,ifscCode,accNo,interesrRate)
    {
        this.Name=Name;
        this.Location=Location;
        this.ifscCode=ifscCode;
        this.accNo=accNo;
        this.interesrRate=interesrRate;
    }
}

let axis_bank=new Bank("Axis Bank","Mumbai","ax75854",4154853,10.4)
let sbi_bank=new Bank("SBI Bank","Pune","sbi8954",4230178,11.4)
let icici_bank=new Bank("ICICI Bank","Wakad","icici22578",334750,9)
let kotak_bank=new Bank("Kotak Bank","Delhi","kotak789457",4857120,7.5)
let hdfc_bank=new Bank("HDFC Bank","Gujrat","hdfc3652",36255,5)
let panjab_bank=new Bank("Panjab Bank","Punjab","pnj56983",536472,10.4)

let map=new Map();
map.set(`${axis_bank.accNo}`,axis_bank)
map.set(`${sbi_bank.accNo}`,sbi_bank)
map.set(`${icici_bank.accNo}`,icici_bank)
map.set(`${kotak_bank.accNo}`,kotak_bank)
map.set(`${hdfc_bank.accNo}`,hdfc_bank)
map.set(`${panjab_bank.accNo}`,panjab_bank)

const keyofMap=map.keys();
console.log(keyofMap);

for (const key of keyofMap) 
{
    const element=map.get(key)
    console.log(key,`:- bank Name :${element.Name},ACC No. :${element.accNo},Interest Rate: ${element.interesrRate}`);
}



