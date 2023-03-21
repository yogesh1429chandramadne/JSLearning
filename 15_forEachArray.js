const array =[2,3,4,5,9];
array.forEach(function(currentValue,index,array){
console.log(currentValue,index,array);
})
//Easy Way To Write Code
array.forEach((currentValue)=>{
    console.log(currentValue);
})
console.log("To Find Even Number");
array.forEach(element=>{
    if (element%2==0) {
        console.log(element);
        
    }
})
console.log("Sum The Array....");
let sum=0;
array.forEach((element)=>{
sum =sum+element
})
console.log(sum);
console.log("find The No. has Even Index...");
array.forEach((element,index)=>{
    if (index%2==0) {
        console.log(element);
        
    }
})


























// let show =(element)=>{
//     console.log("inside");
// }
// show();
// //another Way To write 
// let showNew =element=>console.log("inside New");
    

// showNew("Element");
// let display = (value)=>{
//     console.log(value*value);
//     return value;
// }
// display(10);

