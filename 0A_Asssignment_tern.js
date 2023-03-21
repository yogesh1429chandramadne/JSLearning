console.log(`***************To Find The Greatest Num****************`);
function greaterNumber(num1,num2) {
    var result = num1 > num2 ? `Greatest num is ${num1}`:`Greatest num is ${num2}`;
    console.log(result);
    
}
console.log(`Greater No. between 10,-10 Is`);
greaterNumber(10,-10);
console.log("Greater No. between 800,899 Is");
greaterNumber(800,899);

function evenOrOdd(num) {
    var True= num;
    var result =  num%2==0?`true the given number ${num} Is Even`:`false the given number ${num} Is Odd `;
    console.log(result);
    
}
console.log(`******************8Checking The below Numbers whether Even Or Odd Respectively *************`);

evenOrOdd(29);
evenOrOdd(44);
evenOrOdd(0);
evenOrOdd(101);
console.log("****************Find The Given Languages Length Whether Even / Odd *****************");
function tool(language) {
    var result = language.length;
    var langLength = language.length%2 == 0 ? `The Given ${language} Has Even Length`:`The Given ${language} Has Odd Length`;
    return langLength;
}
var result =tool("javascript") 
console.log(result)
var result = tool("Developer")
console.log(result);
var result = tool("Google Chrome")
console.log(result);
    
