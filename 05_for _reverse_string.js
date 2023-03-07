


var reverseString = function (str) {
  var reverse = "";
  for (let index = str.length - 1; index >= 0; index--) {
    var charAt = str.charAt(index);
    reverse = reverse + charAt;
  }
  return reverse;
};
var result = reverseString("Do It Anyhow");
console.log(`Reverse String Is :${result}`);

var reverseStr = function (str) {
  var reverse = "";
  for (let index = str.length - 1; index >= 0; index--) {
    var char = str.charAt(index);
    reverse = reverse + char;
    if (char == " ") {
      break;
    }
    
  }
  return reverse;
};
var result = reverseStr("Do It Anyhow");
console.log(`Reverse last Word Is: ${result}`);
var str = "I am Angular  Developer";
var count = 0;
for (let index = 0; index < str.length; index++) {
  var char = str.charAt(index);
  if (char == " ") {
    count = count + 1;
  }
}
console.log("The Total No. Of Spaces Is", count);