const mapOfNumbers =new Map();
mapOfNumbers.set("One",1)
mapOfNumbers.set("Two",2)
mapOfNumbers.set("Three",3)
mapOfNumbers.set("One",1)
console.log(mapOfNumbers.size);
console.table(mapOfNumbers);

console.log(mapOfNumbers.get("Two"));
console.log(mapOfNumbers.has("One"));
console.log("Traversing Map");
const keyOfNum = mapOfNumbers.keys();
for (const key of keyOfNum) {
    console.log(key,mapOfNumbers.get(key));
    
}














