console.log(myName);
var myName = "Virat Kohli";
// simple Function can be Access before intilization because it is hoisted
show();
function show() {
    console.log("Show() Function");
    
}


 
// Function Expression will Not be Access Before Initiliasion Because Of  Fun Expression Is Not Hoisted
var greet = function () {
    console.log("Good Morning");
    
}
greet();




