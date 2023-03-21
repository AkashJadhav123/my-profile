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

console.log("************************Task-1************************");

array_employees=[emp_anil,emp_radha,emp_rishi,emp_Sonali,emp_monika,emp_viny,emp_mahi]
console.error("Employees with their Name working in TCS");
for (const iterator of array_employees) 
{
    if(iterator.emp_company=="TCS")
    {
        console.log("Emp_Name :",iterator.emp_name,", Company_Name :",iterator.emp_company);
    }
}

console.log("************************Task-2************************");
console.error("Employees in Finance Department");
for (const iterator of array_employees) 
{
    if(iterator.emp_dept=="Finance")
    {
        console.log(`Emp_Department :${iterator.emp_dept}, Emp_Name :${iterator.emp_name}`);
    }
}

console.log("************************Task-3************************");
console.error("Employyes whose name starts with 'R' ");

for (const iterator of array_employees) 
{
    if(iterator.emp_name.startsWith("R"))
    {
        console.log("Name starts with alphabet 'R' ",iterator.emp_name);
    }
}

console.log("************************Task-4************************");
console.error("Employees whose salary is '>75000'")

for (const iterator of array_employees) 
{
   if(iterator.emp_salary>75000)
   {
      console.log(`Emp_Name :${iterator.emp_name}, Emp_Company :${iterator.emp_company}, Emp_Salary :${iterator.emp_salary}`);
   }
}

console.log("************************Task-5************************");
console.error("Employees whose salary is '>=50000' && from 'IT' department ")
for (const iterator of array_employees) 
{
    if(iterator.emp_salary>=50000 && iterator.emp_dept=="IT")
    {
        console.log("Employee details are : ",iterator);
    }
}

console.log("************************Task-6************************");
console.error("All Employees working in 'Infosys' company ")

for (const iterator of array_employees) 
{
    if(iterator.emp_company=="Infy")
    {
        console.log("Employee details are : ",iterator);
    }
}


