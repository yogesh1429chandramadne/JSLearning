function primeNumber(num) {
    if (num<=1) {
        return false;
        
    }
    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num%i===0) {
            return false;
            
        }
        
    }
    return true;
}
console.log(primeNumber(17));
console.log(primeNumber(24));
console.log(typeof Math.sqrt());
console.log(primeNumber(15));