












var arrayOfNumbers = [10,20,25,15,30,5];
const valueAtIndex2 = arrayOfNumbers[2];
console.log(`value at index 2 is :${valueAtIndex2}`);
arrayOfNumbers[3]=35;
console.log(arrayOfNumbers);
arrayOfNumbers[1]=50;
console.log(arrayOfNumbers);
console.log(`****Add Element in the last using push*****`);
arrayOfNumbers.push(40);
console.log(arrayOfNumbers);
console.log(`*****add element in the first using unshift`);
arrayOfNumbers.unshift(5);
console.log(arrayOfNumbers);

console.log(`*****Removing Last element using pop method`);
arrayOfNumbers.pop();
console.log(arrayOfNumbers);
console.log(`*****removing first element using shift method`);
arrayOfNumbers.shift();
console.log(arrayOfNumbers);
var arrayOfNumbers = [10,20,25,15,30,5,40,45];
console.log(`*slice method For Slicing start`);
const arrayFromIndex3= arrayOfNumbers.slice(3);
console.log(arrayFromIndex3);
console.log(`slice staart & end`);
const subarray = arrayOfNumbers.slice(2,5);
console.log(subarray);
var arrayOfNumbers = [10,20,25,15,30,5,40,45];
console.log(`splice start index`);
const SpliceArray =arrayOfNumbers.splice(3)
console.log(`removed element from array is :${SpliceArray}`);
console.log(arrayOfNumbers);
//to remove a particular no.from array
var arrayOfNumbers = [10,20,25,15,40,45];
const splicedArrayWithDelteCount=arrayOfNumbers.splice(2,1);
console.log(arrayOfNumbers);
var arrayOfNumbers = [10,20,25,15,40,45];
arrayOfNumbers.splice(1,1);
console.log(arrayOfNumbers);
arrayOfNumbers.splice(3,1);
console.log(arrayOfNumbers);
//Adding a no. inside the Array Without replacing Existing no.
var arrayOfNumbers = [10,20,25,15,40,45];
arrayOfNumbers.splice(2,0,22);
console.log(arrayOfNumbers);
var arrayOfNumbers = [10,20,25,15,40,45];
arrayOfNumbers.splice(4,0,5,35,55);
console.log(arrayOfNumbers);
//Adding a no. inside the Array  replacing Existing no.
var arrayOfNumbers = [10,20,25,15,40,45];
arrayOfNumbers.splice(2,1,50,60)
console.log(arrayOfNumbers);
arrayOfNumbers.splice(2);
console.log(arrayOfNumbers);
//traversing in array
var arrayOfNumbers = [10,20,25,15,30,5,40,45];
for (let index = 0; index < arrayOfNumbers.length; index++) {
    const element = arrayOfNumbers[index];
    console.log(element);
    
    
}

