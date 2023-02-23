var word1 ="javascript";
var word2 ="Google Chrome";
var word3 ="Developer Smart";
console.log("***********Word o/p Step 1 ************");
function squareOfWordLength(word) {
    var var1 = word;
    
    var countOfW = var1.length**2;
     console.log(`Given Word Is: ${word}`);
     console.log(`Length Of Given Word:${word.length}`);
     console.log(`Square of ${word} Length :${countOfW}` );
    return word;
    
}

squareOfWordLength(word1);
squareOfWordLength(word2);
squareOfWordLength(word3);
console.log("********** Step 2 *********");
function String(){
     var developer = "I am Angular Developer";
     var stringLength = developer.length;
     var wordSplit = developer.split(" ");
    var wordCount = wordSplit.length;

    console.log(`Given String length Is:${stringLength}`);
    console.log(`No.Of words Available In This String: ${wordCount}`);
    console.log(`String After Divided By Total Words:${stringLength/wordCount}`);
    console.log(`string Ater multiplying By Total Words:${stringLength*wordCount}`);
    
}

String();