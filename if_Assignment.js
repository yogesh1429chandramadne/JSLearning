console.log(`******************** step 1 *************************`);
function checkEvenOdd(num) {
    
    if (num%2==0)
    {return "Even";
}
if (num%2!=0);
{return "ODD";
}
    
}
var result = checkEvenOdd(45);
console.log(`Given Number 45 IS ${result}`);
var result = checkEvenOdd(70);
console.log(`Given Number 70 IS ${result}`);
var result = checkEvenOdd(67);
console.log(`Given Number 67 IS ${result}`);
var result = checkEvenOdd(98);
console.log(`Given Number 98 IS ${result}`);
console.log(`****************** Step 2 ****************`);
function eligible(age) {
    if (age>=18) {console.log(`Person is eligible For Voting Age Is-`);
        return age;
    } else {console.log(`person Is Not Eligible For Voting Age Is- `);
        return age;
    }
    
}
var result = eligible(18);
console.log(result);
var result = eligible(20);
console.log(result);
var result = eligible(17);
console.log(result);
var result = eligible(40);
console.log(result);
console.log(`******************** Step 3 *********************`);
function string(language) {
var result = language;
var str1 = result.length;
if (result.length>=10) {console.log(`Given String ${language} Contain More Than 10 Characters `);
    
} else {console.log(`Given String Not Contain 10 Characters ${language}`);
    
}
}
string("javascript-ES6")
console.log(`*************** Step 3 ***********************`);
function start(code) {
    var res = "javascript Language";
    var sub = res.startsWith("java")
    
    if (sub) {console.log(`Given String Start With Java ${sub}`);

    return `${code}`;
}
    

   
    
}
 start("java");
