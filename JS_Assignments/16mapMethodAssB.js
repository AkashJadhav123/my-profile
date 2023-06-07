class Employee
{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company)
    {
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
}

const emp_anil=new Employee(22,"Anil","IT",50000,"TCS")
const emp_radha=new Employee(33,"Radha","HR",74000,"Wipro")
const emp_rishi=new Employee(55,"Rishi","Finance",47000,"TCS")
const emp_Sonali=new Employee(66,"Sonali","Finance",45000,"Infy")
const emp_monika=new Employee(77,"Monika","IT",40000,"Wipro")
const emp_viny=new Employee(88,"Vinayak","IT",75000,"TCS")
const emp_mahi=new Employee(99,"Mahesh","HR",85000,"Infy")

const objectArray=[emp_anil,emp_radha,emp_rishi,emp_Sonali,emp_monika,emp_viny,emp_mahi];
const namearray=[]
for (let index = 0; index < objectArray.length; index++) {
    const element = objectArray[index];
    namearray.push(element.emp_name)
}console.log("List of all employee names :",namearray);

console.log("----------------------------------------------------------------------------");
console.log();
const deptArray=[]
objectArray.forEach(value=>{
deptArray.push(value.emp_dept)
})
console.log("List of all employee departments :",deptArray);
console.log("----------------------------------------------------------------------------");

const idarray=[]
for (const iterator of objectArray) {
    idarray.push(iterator.emp_id)
}
console.log("List of all employee id's :",idarray);
console.log("----------------------------------------------------------------------------");
console.log("List of employees working in TCS =>");
objectArray.forEach(value=>{
    if(value.emp_company=="TCS")
    {
        console.log(value.emp_name);
    }
})
console.log("----------------------------------------------------------------------------");
