var arraySeasonalFruits =["Banana","Orange","Apple","Mango","Water Melon"];
const valueAtIndex0 =arraySeasonalFruits[0];
console.log(`)-first Fruit In The Given Array Is :${valueAtIndex0} `);
const fruitLast = arraySeasonalFruits.pop()
console.log(`)-Last Fruit In the Given Array Is: ${fruitLast}`);
console.log(`*****************************************************`);
var arraySeasonalFruits =["Banana","Orange","Apple","Mango","Water Melon"];
arraySeasonalFruits.unshift("Papaya");
 console.log(`Given Array - [${arraySeasonalFruits} ] `);
console.log(`)-After Adding "Papaya" In The Given Array Is :${arraySeasonalFruits} `);
console.log(`*****************************************************`);

arraySeasonalFruits.splice(4,1);
console.log(`Given Araay - [${arraySeasonalFruits} ] `);
console.log(`)-After Removing Mango From Given Array:${arraySeasonalFruits}  `);
console.log(`*****************************************************`);
var arraySeasonalFruits =["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Given Array - [${arraySeasonalFruits} ] `);
arraySeasonalFruits.push("Pineapple");
console.log(`)-After Adding "Pineapple" In Given Array At Last :${arraySeasonalFruits}  `);
console.log(`*****************************************************`);
console.log(`Given Array - [${arraySeasonalFruits} ] `);
arraySeasonalFruits.splice(4,0,"Dragon Fruit")
console.log(`)-After Adding "Dragon Fruit" In Given Array  :${arraySeasonalFruits}  `);
console.log(`*****************************************************`);
console.log(`Given Array - [${arraySeasonalFruits} ] `);
arraySeasonalFruits.splice(1,1,"Kiwi")
console.log(`)-After Replacing "Orange" With "Kiwi" In Given Array  :${arraySeasonalFruits}  `);
console.log(`*****************************************************`);
console.log(`Given Array - [${arraySeasonalFruits} ] `);
arraySeasonalFruits.splice(1,4)
console.log(`)-Elements Starting From 1 To 4 Is  :[${arraySeasonalFruits}]  `);
console.log(`*****************************************************`);
var arraySeasonalFruits =["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Given Array - [${arraySeasonalFruits} ] `);
const lastElement =arraySeasonalFruits.slice(2);
console.log(`)-Last Three Elements : ${lastElement}`);