//Arrow Function with No return Value & No Arguments

let show = ()=>{
    console.log("Arrow Function");
}
show();
//Arrow Function with No return Value &  Arguments
let add = (num1,num2)=>{
    console.log(num1+num2);
}
add(100,200);
//Arrow Function with  return Value &  Arguments
let multiply = (num1,num2)=>{
    let result = num1*num2;
    return result;
}
let res=multiply(100,200);
console.log(res);
//easy way to write code
let multiplyRes= (num1,num2)=>num1*num2;
console.log(multiplyRes(30,5));