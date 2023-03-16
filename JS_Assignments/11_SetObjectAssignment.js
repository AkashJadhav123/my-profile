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

let set=new Set();
set.add(axis_bank)
set.add(sbi_bank)
set.add(icici_bank)
set.add(kotak_bank)
set.add(hdfc_bank)
set.add(panjab_bank)


for (const iterator of set) 
{
    console.log(`Name :${iterator.Name}, Location :${iterator.Location}`);
}
