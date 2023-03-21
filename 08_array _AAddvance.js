const array =[3,4,5,6,7,2,4,5]
const setOfElements = new Set();
for (const element of array) {
    setOfElements.add(element);
}
console.table(setOfElements);
const mySet = [...new Set(array)];//set is used to store only unique elements
console.log(mySet);


