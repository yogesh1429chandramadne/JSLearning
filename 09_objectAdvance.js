const employee={
    empId:124567,
    name:"Elon Musk",
    country:"US",
    city:"silicon Valley"

}
console.log(`==================== In operator=====================`);
const isIdAvailable = "empId" in employee;
console.log(isIdAvailable);
for (const key in employee) {
    if (Object.hasOwnProperty.call(employee, key)) {//we can skip this if block without this also code run
        const element = employee[key];
        console.log(key,element);
    }
}
const keysOfEmployees= Object.keys(employee);
console.log(keysOfEmployees);
const valuesOfEmployees= Object.values(employee);
console.log(valuesOfEmployees);
const entriesOfEmployees= Object.entries(employee);
console.log(entriesOfEmployees);