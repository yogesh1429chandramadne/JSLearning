// var num1 =100;
// var num2 =200;
// function swapVariables(value1,value2){
// console.log("before swap:", value1,value2);

// var temp = value1;
// value1 = value2;
// value2 = temp;
// console.log("after swap:",value1.value2);
// }
// swapVariables(value1,value2);
// function with no arguments and no return value



function showFullName(){
    console.log("my full Name is:yogesh chandramadne" );
}
showFullName();
//function wth aarguments and no return value
function showAge (age){
console.log("my age is :",age);
}
showAge(28);
//function with no argument and return value
function fullName(){
    var name = "yogesh chandramadne"
    return name;
}
var fName = fullName();
console.log(fName);
//function with arguments and return value
function sumOfNumbers(num1,num2,num3) {
    var sum =num1+ num2+num3;
    return sum;
}
var sumResult = sumOfNumbers(10,45,79.56);
console.log(sumResult);