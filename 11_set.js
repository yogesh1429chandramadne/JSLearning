const setOfNums = new Set();
setOfNums.add(2);
setOfNums.add(3);
setOfNums.add(8);
setOfNums.add(9);
setOfNums.add(2);
setOfNums.add(3);
console.log(setOfNums);
console.log(setOfNums.size);
setOfNums.delete(8);
console.log(setOfNums);
//setOfNums.clear();
console.log(setOfNums.values());
console.log("Traversing Set");
for (const element of setOfNums) {
    console.log(element);
    
}











