console.log("******************Task-1******************");
function printingName()
{
    console.log("Hii... I am AJ");
}printingName()

function printinAddress()
{
    console.log('I am from Sangli');
}printinAddress()

console.log("******************Task-2******************");
function personDetails(fName,lName,clgName,)
{
    console.log("My Name is :",fName,lName," \n I am graduated from",clgName);
}personDetails("Akash",'Jadhav',"Sangola College Sangola")

console.log("******************Task-3******************");
function swapValuesdude(var1,var2)
{
console.log("Values before swapping"," var1 :",var1,"\n\t\t\tvar2 :",var2);
var temp=var1;
var1=var2;
var2=temp
console.log("Values after  swapping"," var1 :",var1,"\n\t\t\tvar2 :",var2);

}
  swapValuesdude("Virat","Anushka")
  swapValuesdude(1000,2000)

  console.log("******************Task-4******************");
  function addThreeValues(val1,val2,val3)
  {
    var add=val1+val2+val3;
    return add;
  }console.log("Addition of numbers is :",addThreeValues(10.23,600,40));
   console.log("Addition of character is :",addThreeValues("Hello ",'Good ','Morning'));