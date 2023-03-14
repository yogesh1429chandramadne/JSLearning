
console.log(`=======================================Performing Shallow Cloning & Adding 55,66 At The OF array==================================================`);

const arrayNums = [20,3,4,56,90,400,49]
console.log(`Original Array:[${arrayNums}]`);
const clonedArray= arrayNums;
clonedArray.push(55,66);
console.log(`Cloned Array: [${clonedArray}]`);
console.log(`=======================================Performing Deep Cloning & Adding 10,25 At The End of Array==================================================`);
let deepClone = {...arrayNums};
console.log(`Original Array:[${arrayNums}]`);
 deepClone =[20,3,4,56,90,400,49,55,66,10,25]
console.log(`Cloned & Updated Array:[${deepClone}]`);
const arrayEven = [2,30,14,8]

const mergeArray =[...arrayNums,...arrayEven]
console.log(`=======================================Merging Two Arrays==================================================`);
console.log(`Even Array:${arrayEven}`);
console.log(`OriginalArray:${arrayNums}`);
console.log(`After Merging Two Arrays:[${mergeArray}]`);

console.log(`=======================================Employee Info==================================================`);

const employeeInfo ={
    empId:27,
    empName:"John Doe",
    salary:{
        julyMonth:"40K",
        augMonth:"50K",
        junMonth:"65K"
    },
    address:{
        locality:{
            colony:"Om Vrindavan Society",
            street:"Kanch Pokli,431202"
        },
        city:"Mumbai",
        State:"maharastra",
        Country:"INDIA"
    },
    mobiles:["+91 8600 3456 88","1800 4567 32","+91 9096 5678 77"]
}
console.log(`Address:Colony:${employeeInfo.address.locality.colony},Street:${employeeInfo.address.locality.street},City:${employeeInfo.address.city},State:${employeeInfo.address.State},Country:${employeeInfo.address.Country}`);
console.log(`Mobiles:${employeeInfo.mobiles}`);
console.log(`=======================================Performing Deep Cloning USing JSON .Stringify & Updating The Properties==================================================`);
const deepCopy = JSON.parse(JSON.stringify(employeeInfo));
deepCopy.salary.julyMonth="80K";
console.log(`Original Salary Of Employee :${employeeInfo.salary.julyMonth}`);
console.log(`Incremented Salary Of Employee :${deepCopy.salary.julyMonth}`);
deepCopy.address.Country="United Kingdom";
console.log(`Mother Land  Of Employee :${deepCopy.address.Country}`);
console.log(`Migrating Country Of Employee :${deepCopy.address.Country}`);











