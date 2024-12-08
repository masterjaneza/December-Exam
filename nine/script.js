// Primorial of a number

function isPrime(number) {
    if(number <= 1) { // ამოწმებს ნაკლებია თუ არა 1 - ზე
        return false 
    }
    //გადაურბენს for ციკლით, შეამოწმებს თუ იყოფა რიცხვი სხვა რიცხვებზე
    for(let i = 2; i <= Math.sqrt(number); i++) {
        if(number % i === 0) {
            return false
        } 
    }
    return true;

} 

function primorial(n) {
    let product = 1 // ცვლადს ანიჭებს 1 - ს
    for(let i = 2; i <= n; i++) { // გადაურბენს for ციკლით 
        if(isPrime(i)) { // მარტივ რიცხვებს გადაამრავლებს ერთმანეთს
            product *= i
        }
    }
    return product
}

console.log(primorial(5))
console.log(primorial(10))
console.log(primorial(1))