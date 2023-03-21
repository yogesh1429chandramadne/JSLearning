function doAssignment(callback) {
    console.log("Solving Assignments");
    console.log("Step 1 tO 10 all ares solved now  ");
    callback(); 
}
function copyAssignment() {
    console.log("Thank you Ajju, Let Me copy Assignment");
    console.log("Ohh Finally Copied All Assignment");

    
}
doAssignment(copyAssignment);//set time out function used to set time to a function to show after some time
function greet() {
    console.log("Good Morning ....");
    
}//1 sec == 1000 milisec
setTimeout(greet,4000);
function firstClass() {
    console.log("We can return Function from Another Function");
    function innerFunction() {
        console.log("inner Function");

        
    }
    return innerFunction;
}
var inner=firstClass();
inner();
