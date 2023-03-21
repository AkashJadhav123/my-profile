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
console.log("TCS employee details");
let objectArray=[emp_anil,emp_radha,emp_rishi,emp_Sonali,emp_monika,emp_viny,emp_mahi]
objectArray.forEach(element => {
    if(element.emp_company=="TCS")
    {
        console.log(`Emp_Name :${element.emp_name},Emp_Company :${element.emp_company}`);
    }
});

console.log("************************Task-2************************");
console.log(("Employees with salary greater than 50000"));
objectArray.forEach(element=>{
    if(element.emp_salary>=50000)
    {
        console.log(element);
    }
})

console.log("************************Task-3************************");
console.log("sum of all employees");
totalSalary=0
objectArray.forEach(element=>{
    totalSalary=totalSalary+element.emp_salary
})
console.log("Total salary :",totalSalary);

console.log("************************Task-4************************");
console.log("Average salary of all employees");
console.log("Find Average salary");
let avgSalary=totalSalary/objectArray.length
console.log(`Avg salary is : ${avgSalary}`);

console.log("************************Task-5************************");

objectArray.forEach(element=>{
    if(element.emp_dept="IT" || element.emp_dept=="HR")
    {
        if(element.emp_salary>=75000)
        {
            console.log(element);
        }
    }
    
})

