 
 console.log(`************************step1***************`);
 var str = function (String) {
   // var str = "Javascript is the language of internet"
   var count = 0;
   for (let index = 0; index < String.length; index++) {
     var char = String.charAt(index);
     if (
       char == "a" ||
       char == "e" ||
       char == "i" ||
       char == "o" ||
       char == "u" ||
       char == "A" ||
       char == "E" ||
       char == "I" ||
       char == "O" ||
       char == "U"
     ) {
       count = count + 1;
     }
   }
   return count;
 };

 var result1 = str("Javascript is the language of internet");
 console.log(
   `The No. of Vowels In Given String  IS:"Javascript is the language of internet"- `,
   result1
 );
 var result2 = str("I am Aangular Developer");
 console.log(
   `The No.Of Vowels In The Given String IS : "I am Aangular Developer"-`,
   result2
 );
 var result3 = str("Hard Work and Committment is the key to success ");
 console.log(
   `The No. OF vowels In The Given String IS : "Hard Work and Committment is the key to success "`,
   result3
 );
 console.log(`*************************step2***********************`);
 var lastWord = function (str) {
   var countChar = 0;
   for (let index = str.length - 1; index >= 0; index--) {
     var charNewString = str.charAt(index);
     if (charNewString == " ") {
       break;
     }
     countChar = countChar + 1;
   }
   return countChar;
 };
 var res1 = lastWord("Javascript is the language of internet");
 console.log(
   `Total No OF Char Available In The Last Word Of String Is  `,
   res1
 );
 var res2 = lastWord("I am Aangular Developer");
 console.log(
   `Total No OF Char Available In The Last Word Of String Is  `,
   res2
 );
 var res3 = lastWord("Hard Work and Committment is the key to success");
 console.log(
   `Total No OF Char Available In The Last Word Of String Is  `,
   res3
 );
