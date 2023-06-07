class vehicle{
    
    constructor(name,color,engine,brand,price)
    {
        this.name=name;
        this.color=color;
        this.engine=engine;
        this.brand=brand;
        this.price=price;
    }
}
console.error("--------------------------------------1 step-----------------------------");
const Maruti=new vehicle("Maruti Swift","Blue","petrol","Maruti","1.8Lakh");
console.log(Maruti);
const honda=new vehicle("Hyundai creta","Black","petorl","Honda","10Lakh");
console.log(honda);
const mahindra=new vehicle("Mahindra Thar","red","Diesel","Mahindra","9.99Lakh");
console.log(mahindra);
const Tata=new vehicle("Tata Nexon","Blue","Diesel","TATA","7.80Lakh");
console.log(Tata);
const toyota=new vehicle("Toyota Land Cruiser 300","White","Diesel","Toyota","2.10 Cr");
console.log(toyota);
console.error("-------------------------------------Traverse Array----------------------");
const vehicleOfArray=[
    console.log(`VehicleOfDetails: ${Maruti.name} ${Maruti.color} ${Maruti.engine} ${Maruti.brand} ${Maruti.price}`),
    console.log(`VehicleOfDetails: ${honda.name} ${honda.color} ${honda.engine} ${honda.brand} ${honda.price}`),
    console.log(`VehicleOfDetails: ${mahindra.name} ${mahindra.color} ${mahindra.engine} ${mahindra.brand} ${mahindra.price}`),
    console.log(`VehicleOfDetails: ${Tata.name} ${Tata.color} ${Tata.engine} ${Tata.brand} ${Tata.price}`),
    console.log(`VehicleOfDetails: ${toyota.name} ${toyota.color} ${toyota.engine} ${toyota.brand} ${toyota.price}`)
];
class college {
    constructor(university, college_name, location, stream) {
      this.university = university;
      this.college_name = college_name;
      this.location = location;
      this.stream = stream;
    }
  }
  console.error("--------------------------2nd step-----------------------");
  const BCS = new college(
    "Solapur University ",
    "Sangola College",
    "Sangola",
    "BCS "
  );
  const Msc=new college("Pune University","MIT College","Pune","MSc");
  console.log(BCS);
  console.log(Msc);
  console.error("-------------------Traverse using for in with one argument----------------------");
  function traverseobject(obj)
  {
      for(let key in obj){
          console.log(`${key}: ${obj[key]}`);
      }
  }
  traverseobject(BCS);
  console.error("---------------------------------------------------------------------------------");
  traverseobject(Msc);

  console.error("---------------------------------No is prime OR Not------------------------------");
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