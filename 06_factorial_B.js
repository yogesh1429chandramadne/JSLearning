function factorialOfWordsCount(word) {
    if(word==null||word==undefined||word==isNaN){
        word="invalid Word";
        return word;
    }
     if(word==0){
        return word;
     }else{
     let long = (word.split(" ")).length;
     var fact = 1;
     for (let index = long; index >= 1; index--) {
         fact = fact*index;
         console.log(`The No. OF Words Present In The Given String Is :${long} `);

         }
         return fact;
        }
        
    }
console.log(`*******************************************************`);
var res = factorialOfWordsCount("revision is the mother of success");
console.log(`Factorial Of Given String Is "revision is the mother of success" :${res}`);
console.log(`*******************************************************`);
var res = factorialOfWordsCount("We Never Fail We Always Learn");
console.log(`Factorial Of Given String Is "We Never Fail We Always Learn" :${res}`);
console.log(`*******************************************************`);
var res = factorialOfWordsCount(null);
console.log(`Factorial Of Given String Is null :${res}`);
console.log(`*******************************************************`);
var res = factorialOfWordsCount("Yogesh Dhondiba Chandramadne");
console.log(`Factorial Of Given String Is "Yogesh Dhondiba Chandramadne" :${res}`);