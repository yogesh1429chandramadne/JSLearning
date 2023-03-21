class employee {
  constructor(empId, empName, empDept, empSalary, empCompany) {
    this.empId = empId;
    this.empName = empName;
    this.empDept = empDept;
    this.empSalary = empSalary;
    this.empCompany = empCompany;
  }
}
console.log(
  `**************************************Details Of Employees*************************************************`
);
const Anil = new employee(22, "Anil", "IT", 50000, "TCS");
console.log(Anil);
const Radha = new employee(33, "Radha", "HR", 74000, "Wipro");
console.log(Radha);
const Rishi = new employee(55, "Rishi", "Finance", 47000, "TCS");
console.log(Rishi);
const Sonali = new employee(66, "Sonali", "Finance", 45000, "Infy");
console.log(Sonali);
const Monika = new employee(77, "Monika", "IT", 40000, "Wipro");
console.log(Monika);
const Vinayak = new employee(88, "Vinayak", "IT", 75000, "TCS");
console.log(Vinayak);
const Mahesh = new employee(99, "Mahesh", "HR", 85000, "Infy");
console.log(Mahesh);
console.log(
  `**************************************To Find The Employees Working In TCS*************************************************`
);

const arrayOfEmployee = [Anil, Radha, Rishi, Sonali, Monika, Vinayak, Mahesh];
for (const employee of arrayOfEmployee) {
  if (employee.empCompany == "TCS") {
    console.log(
      `Employee Name :${employee.empName},Company Name:${employee.empCompany}`
    );
  }
}
console.log(
    `**************************************Employees Working In Finance Department*************************************************`
  );
  
  
  for (const employee of arrayOfEmployee) {
    if (employee.empDept == "Finance") {
      console.log(
        `Employee Department :${employee.empDept},Employee Name:${employee.empName}`
      );
    }
  }
  console.log(
    `**************************************Employees Whose Name Starts With R*************************************************`
  );
  
  
  for (const employee of arrayOfEmployee) {
    let empName=employee.empName;
    if (empName.startsWith("R")) {
      console.log(
        employee
      );
    }
  }
  console.log(
    `**************************************Employees Whose Salary Is Greater Than 75000*************************************************`
  );
  
  
  for (const employee of arrayOfEmployee) {

    if (employee.empSalary>=75000) {
      console.log(
        ` Employee Name :${employee.empName},Employee Company :${employee.empCompany},Employee Salary:${employee.empSalary}`
      );
    }
  }
  console.log(
    `**************************************Employees Whose Salary Is Greater Than 50000 & Working In  IT Dept*************************************************`
  );
  
  
  for (const employee of arrayOfEmployee) {

    if (employee.empSalary>=50000 && employee.empDept=="IT") {
      console.log(
        employee
      );
    }
  }
  console.log(
    `**************************************Employees  Working In  INFOSIS Company*************************************************`
  );
  
  
  for (const employee of arrayOfEmployee) {

    if ( employee.empCompany=="Infy") {
      console.log(
        employee
      );
    }
  }
  
  
  

  

