const student={
    firstName:"Prashant",
    isWorking:true,
    age :22,
    collageName:"coep",
    id:12345,
}
//in object destructructing is used to we can extract properties from object 
let{firstName,isWorking,age,collageName,id}=student;//object Destructuring
console.log(`isWoking:${isWorking}     age:${age}`);
//Array destructuring
array =[5,6,7,8];
let [num1,num2,num3,num4,num5=0,num6]=array;
console.log(num1,num2,num3,num4,num5,num6);