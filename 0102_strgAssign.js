

function stringHandsOn() {
    var str = "   Hey You Are Doing Good Keep It Up   ";
    return str;
    }
var resultOfString = stringHandsOn(); 
console.log("print the string as it is:",resultOfString);
var stringCount = resultOfString.length;
console.log("total No of Char in string:",stringCount);
var resultOfStringTrim = resultOfString.trim();
console.log("removing extraa spaces start & end :",resultOfStringTrim+".","string lenth after trim:",resultOfStringTrim.length);
console.log("total no of extra spaces count:",resultOfString.length-resultOfStringTrim.length);
console.log(resultOfStringTrim.charAt(0),resultOfStringTrim.charAt(resultOfStringTrim.length-1));
var totalWordsStr = resultOfStringTrim.split();
console.log("Total  no of words are :",totalWordsStr);
console.log("Index of word Good is :",resultOfStringTrim.indexOf('Good'));
var substring = resultOfStringTrim.slice(22 ,resultOfStringTrim.length);
console.log("substring starting from index 22 :",substring);