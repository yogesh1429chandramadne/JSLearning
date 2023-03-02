function motive() {
    var moto = "   Hey You Are Doing Good Keep It Up   ";
    var motoLength = moto.length;
    var wordSplit = moto.split(" ");
    var noOfWords = wordSplit.length;
    var motoTrim = moto.trim();
    var slice = moto.slice(25);
    

    console.log(`length of string: ${motoLength}`);
    console.log(`No.Of Words: ${noOfWords}`);
    console.log(`After Trim :${motoTrim}`);
    console.log(`Index Of Given Word:${motoTrim.indexOf(`Good`)} `);
    console.log(`Given Word Present Inside The String: ${motoTrim.includes(`Doing`)}`);
    console.log(`slicing :${slice}`);

    }
motive();