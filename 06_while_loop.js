var index = 0;
while (index<=10) {
    console.log(index);
    index++;
    
}
console.log("Even Numbers");
const arrayOfNumbers =[10,20,25,15,40,45,60,40,30,22,26];
var index = 0;//initialisation
let sum = 0;
while (index<arrayOfNumbers.length) {//condition
    const element = arrayOfNumbers[index];
    if(element%2==0){
    console.log(element);//declaration
    sum = sum + element;
}
  index++; 
}