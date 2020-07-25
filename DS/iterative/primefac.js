let findPrimeFactors = (num) => {
    let arr = [];


    for ( var i = 2; i < num; i++) {
        let isPrime
        if (num % i === 0) {
            isPrime = true;
            for (var j = 2; j <= i; j++) {
                if ( i % j === 0) {
                    isPrime == false;
                }
            }
        }if (isPrime == true) { arr.push(i)}

    }console.log(arr)
}

findPrimeFactors(543)
/*function primeFactors(num, primes){
    let i = 2;
    while(i < num){
        if(num % i === 0){
            primes.push(i);
            return primeFactors(num/i, primes);
        }
        i++
    }
    primes.push(num);
    return primes;
}

console.log(primeFactors(543, []))
*/