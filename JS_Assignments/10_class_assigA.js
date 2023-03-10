class Vehicle
{
  
    constructor(companyName,price,color,modelName)
    {
        this.companyName=companyName;
        this.price=price;
        this.color=color;
        this.modelName=modelName;
        //console.log(`${companyName}, ${price}, ${color}, ${model}`);
    }
    
}
let Mercedes=new Vehicle("Mercedes-Benz","75 lakh","Red","M-2.3");
let Ford=new Vehicle("Ford","45 lakh","Black","F-13")
let Toyota=new Vehicle("Toyota","35 lakh","Grey","T-10")
let Mahindra1=new Vehicle("Mahindra","20 lakh","Black","THAR")
let Mahindra2= new Vehicle("Mahindra","25 lakh","Black","Scorpio")

console.error("-------------------------------------------------------------------------------------------------------------------------");
let arrayOfVehicles=[Mercedes,Ford,Toyota,Mahindra1,Mahindra2]

        for(let i=0;i<=arrayOfVehicles.length-1;i++)
            {
            let r= arrayOfVehicles[i]
            console.log(r)
            console.log("***************************************************")
            }
console.error("-------------------------------------------------------------------------------------------------------------------------");


            for (const iterator of arrayOfVehicles) 
            {
                console.log(`Details of vehicle : companyName: ${iterator.companyName}, price: ${iterator.price}, color: ${iterator.color}, modelName: ${iterator.modelName}`);
            }

            // console.log(typeof(arrayOfVehicles));
            // console.log(typeof(r));
class college
{
    constructor(collegeName,studentsCount,city)
    {
        this.collegeName=collegeName;
        this.studentsCount=studentsCount;
        this.city=city;
    } 
}
let o1=new college("PVP",1250,"Kavathe-Mahankal")
let o2=new college("MIT",670,"Pune")
let o3=new college("PVP-IT",4563,"Sangli")
let o4=new college("SM",888,"KM")


function traverseObject(obj)
{
   for (const key in obj) 
   {
    if (Object.hasOwnProperty.call(obj, key)) 
    {
        console.log(`${key} : ${obj[key]}`);
    }
   }
}
console.error("-------------------------------------------------------------------------------------------------------------------------");
traverseObject(o1)
console.log("*****************************************************");
traverseObject(o2)
console.log("*****************************************************");
traverseObject(o3)

console.error("-------------------------------------------------------------------------------------------------------------------------");

let n=11;
count=0;
for(let i=0;i<=n;i++)
{
    if(i%n==0)
    {
        count++;
    }
    
}if(count==2)
{
    console.log("Number 11 is prime");
}else{
    console.log("Number 11 is Not prime");
}