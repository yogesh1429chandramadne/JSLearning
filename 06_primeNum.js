function primeNumber(startValue,totalPrime) {
    let count=0;
    let num = startValue;
    const arrayOfPrime =[];
    while (count<totalPrime) {
        let isPrimeNum = isPrime(num);
        if ((isPrimeNum)) {
            count++;
            arrayOfPrime.push(num);

            
        }
        num++;
    }
    console.log(arrayOfPrime);
}
function isPrime(num) {
    for (let index = 2; index < num; index++) {
        if (num%index==0) {
            return false
        }
        
    }
    return true;
}
primeNumber(20,10);
