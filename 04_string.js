var greet = "Good Morning";
console.log(typeof greet);
console.log("Total number of index characters into this string variable -greet ");
var greetLength = greet.length;
console.log(greetLength);
console.log("Find the character by index value");
var charAtIndex3 = greet.charAt(3);
console.log("character available at index 3 is ", charAtIndex3);
console.log("find the last character");
var charAtLastIndex = greet.charAt(greetLength-1);
console.log("Last char is :", charAtLastIndex);
console.log("Find the index value by character value ");
var indexOfM = greet.indexOf("M");
console.log("index of char M is :",indexOfM);
console.log(" Index of char which is not avaiable in the string: ",greet.indexOf("z"));
console.log("index of o char",greet.indexOf("o") );
console.log("index of o char using lastndexOf() :",greet.lastIndexOf("o"));
var replaceResult =greet.replace("morning,evening");
console.log(replaceResult);
console.log(greet);
console.log("Upper case :",replaceResult.toUpperCase());

console.log("UpperCase:",replaceResult.toLowerCase() );
var myName = "  mohit  sharma    ";
var myNameAfterTrim = myName.trim();
console.log("removing extraa start and end spaces using trim();",myNameAfterTrim,myName.length,myNameAfterTrim.length);
// Find the total extra spaces removed from the string  myName
var count = (myName.length ,myNameAfterTrim.length);
console.log(count);

console.log(myName.trimStart(), myName.trimEnd());

console.log("includes()");
console.log("Is substring Mor includes in the greet or not: ", greet.includes("Mor"));
console.log("Is substring Afternoon includes in the greet or not: ", greet.includes("Afternoon"));
console.log("Is substring o includes in the greet or not: ", greet.includes("o"));

console.log("slice() method");
var sliceResult = greet.slice(5, 12);
console.log(sliceResult);
console.log(greet.slice(2, 5));

console.log("split() method");
var greet = "Good Morning my dear friend";
var splitResult = greet.split(" ");
console.log(splitResult);
console.log("Total words: ", splitResult.length);

var myFriendList = "Billgates, Stew Job, Elon Musk, Ratan Tata, Sundar Pichai, Satya Nadella, Narayan Murti, Nandan Nilekani, Larry Page, Surgey Brain, Tim Cook";
var frdList = myFriendList.split(",");
console.log(frdList);
console.log(frdList.length);


console.log(greet.slice(7));


