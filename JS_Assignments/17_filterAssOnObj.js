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

const arrayObject=[emp_anil,emp_radha,emp_rishi,emp_Sonali,emp_monika,emp_viny,emp_mahi]

const r1=arrayObject.filter(value=>{
    return value.emp_company=="TCS"
})
for (const iterator of r1) {
    console.log(`Comp_Name :${iterator.emp_company} Emp_Name :${iterator.emp_name}`);
}

console.log("------------------------------------------------------------------------------");

let count=0
let sum=0;
const r=arrayObject.filter(value=>{
    if(value.emp_company=="Wipro")
    {
        count++
        //  sum=sum+value.emp_salary
        //  console.log(sum);
        //return sum
         return value

    }
})

for (const iterator of r) {
    sum=sum+iterator.emp_salary
    //console.log(iterator);
}
console.log("Average salary of employees from Wipro is :",sum/count);

console.log("------------------------------------------------------------------------------");

let c=0
let s=0;
const r2=arrayObject.filter(value=>{
    if(value.emp_company=="Wipro" || value.emp_company=="Infy")
    {
        c++
         return value
    }
})

for (const iterator of r2) {
    s=s+iterator.emp_salary
}
console.log("Average salary of employees from companies Wipro and Infy is :",s/c);




