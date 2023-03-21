
console.log("************************************  Step 1***********************************************");
let show =()=>{
    console.log("Good Morning ,Today is Monday");

}
show();
let  value=(num1,num2,num3)=>{
    let multiply=num1 * num2 * num3;
    console.log(multiply);


}
console.log("************************************  Step 2***********************************************");
 console.log(`Multiplying Result Of Three Values `);
 value(5,5,2);
 console.log(`Multiplying Result Of Three Values By Assigning num3 As Default value 1 `);
 value(10,4,num3=1);
 console.log("************************************  Step 3***********************************************");
 let  add=(num1,num2,num3,num4,num5)=>{
    let combine =num1 + num2 + num3 + num4 + num5;
    return combine;


}
let res = add(100,100,200,349,756)
console.log(`Addition Of Five NUmbers  (100,100,200,349,756) is==== ${res}`);
let string = add("I am " ,  " learning " , " ES6 " , " features " , " In Depth")
console.log(`Addition Of Five NUmbers   is==== ${string}`);












