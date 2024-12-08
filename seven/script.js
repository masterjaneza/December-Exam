function primeNums(start, end){
    // სიაში შეინახება prime მნიშვნელობები
    let primes = []

    // გადავუარეთ range - ს, start - დან, end - მდე
    for(let num = start; num <= end; num++) {
        let isPrime = true;

        // ვამოწმებთ თუ იყოფა მნიშვნელობა სწორად
        for(let i = 2; i < num; i++) {
            if(num%i === 0) {
                isPrime = false;
                break;
            }
        }
        // თუ არის prime  და მეტია 1 - ზე მაშინ ჩაემატება სიაში
        if(isPrime && num > 1) {
            primes.push(num)
        }
    }
    // გამოვა სია
    return primes;
}

console.log(primeNums(10, 20))
console.log(primeNums(1, 10))
console.log(primeNums(20, 30))
console.log(primeNums(24, 25))
console.log(primeNums(1, 1))