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

const arrayEmployees=[emp_anil,emp_radha,emp_rishi,emp_Sonali,emp_monika,emp_viny,emp_mahi]

const r=arrayEmployees.sort((a,b)=>
{
   return a.emp_id>b.emp_id ? 1 : -1 
})
console.log("Array employees in ascending order by Emp_Id :")
for (const iterator of r) {
    console.log("Emp_Id :" ,iterator.emp_id,", Emp_Name :" ,iterator.emp_name,", Emp_Dept :",iterator.emp_dept);
}
console.log("---------------------------------------------------");

const r1=arrayEmployees.sort((a,b)=>{
    return a.emp_dept > b.emp_dept ? 1 :-1
})
console.log("Array employees in ascending order by Emp_Dept :");
for (const iterator of r1) {
    console.log("Emp_Id :" ,iterator.emp_id," , Emp_Dept :", iterator.emp_dept," , Emp_Comp :",iterator.emp_company);
}

console.log("---------------------------------------------------");

const r2=arrayEmployees.sort((a,b)=>{
    return a.emp_salary > b.emp_salary ? 1 :-1
})
console.log("Array employees in ascending order by Emp_Dept :");
for (const iterator of r2) {
    console.log("Emp_Name :" ,iterator.emp_name," , Emp_Salary :", iterator.emp_salary," , Emp_Comp :",iterator.emp_company);
}



















