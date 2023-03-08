const  arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
let element  = arrayNumbers.length;
console.log(`)-The Total No.Of Elements Available In Given Array : ${element}  `);
//console.log(`Given Array :${arrayNumbers}`);
let first =arrayNumbers[0];
let last = arrayNumbers[arrayNumbers.length-1];
console.log(`)-First & Last Elements From Given Array IS :${first},${last}`);
let thirdLast = arrayNumbers[arrayNumbers.length-3];
console.log(`)-Third Last Element From Given Array :${thirdLast}`);
console.log(`)- Even Elements In The Array Is :`);

for (let index = 0; index < arrayNumbers.length; index++) {
    const even = arrayNumbers[index];

    if (even%2==0) {

        console.log(`${even}`);
        
    }
    
}
console.log(`)- Odd Elements In The Array Is :`);

for (let index = 0; index < arrayNumbers.length; index++) {
    const odd = arrayNumbers[index];

    if (odd%2!=0) {

        console.log(`${odd}`);
        
    }
    
}

    
let evenSum = 0;
let oddSum = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    
    //const element=index[arrayNumbers.length%2==0]
    if (index%2==0) {
        //evenSum= evenSum+element;
        
        evenSum = evenSum +element ;
       // console.log(element);
        
    }else{
         oddSum = oddSum + element;
    }
    ;
}
console.log(`)-Sum Of Even positioned Numbers :${evenSum}`)
console.log(`)-Sum Of Even positioned Numbers :${oddSum}`);
    //sum(arrayNumbers);
function sum(arrayNumbers) {
    let totalSum = 0;

for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    
    totalSum = totalSum + element ;
   

}

console.log(`)- Total Sum Of All Array Elements Is :  ${totalSum}`);
}
sum(arrayNumbers);
//var multiple = 1;
console.log(`***********************The No.s Which Are multiple Of 5 Is**************`);
for (let index = 0; index < arrayNumbers.length; index++) {
    const element = arrayNumbers[index];
    if (element%5==0) {
        console.log(element);
    
    //multiple = multiple*element;
    }
}
let num = arrayNumbers.includes(115);
console.log(`)-The No.115 Is Avaiable In Given Array Is :${num} `);
let number = arrayNumbers.includes(23);
console.log(`)-The No.23 Is Avaiable In Given Array Is :${number} `);
const  arrayOfNumbers = [20,31,40,25,23,11,29,9,60,2,11];
 arrayOfNumbers.splice(3,0,55,66);
console.log(`)- Array After Inserting Numbers 55,66 Is :${arrayOfNumbers}`);
arrayOfNumbers.splice(4,3);
console.log(`Array After Removing Elements Starting From index 4 :${arrayOfNumbers} `);

