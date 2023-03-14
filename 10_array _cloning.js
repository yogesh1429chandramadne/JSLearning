const arrayOfNumber = [4,5,6,7,8,3]
const newArray = arrayOfNumber;// shallow clone
//console.log(typeof arrayOfNumber);
arrayOfNumber.push(100);
console.log(arrayOfNumber);
console.log(newArray);
console.log(`=============         merging an arrray ===============`);
const array = [5,6,3,2,1]
const cloneArray = [...array]
const evenArray = [2,4,6,8]
const mergedArray = array+ evenArray//first method for merging 
console.log( mergedArray);
console.log(typeof mergedArray);//this method of merging array has drawback the first array & second array values not properly merge
const concatArray = array.concat(evenArray);//second method for merging
console.log(concatArray);
console.log(typeof concatArray);  //using concat method for mergiing array is a effective method 

//third method for merging using spread operator
const resultArray = [...array,...evenArray];
console.log(resultArray);
console.log(typeof resultArray);
