function caesarCipher(str, shift, action) {
    // თუ action არის  "decrypt"-ი, მაშინ პირიქით გადავიტანთ ცვლილებას
    if (action === "decrypt") {
        shift = -shift;
    }

    let result = ""; // შევქმენით შედეგი ცვლადი, რომ შევინახოთ მნიშვნელობა

    // for ციკლით გადავურბინეთ და ვიღებთ წვდომას
    for (let i = 0; i < str.length; i++) {
        let char = str[i]; 

        // ვამოწმებთ თუ სიმბოლო ასო არის
        if (char.match(/[a-zA-Z]/)) {
            
            let base = char >= 'a' ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);

            // გამოთვლილი ახალ ასოს კოდს
            let charCode = char.charCodeAt(0);
            let newCharCode = (charCode - base + shift + 26) % 26 + base;

            // ვაბრუნებთ ახალ სიმბოლოს კოდს
            let newChar = String.fromCharCode(newCharCode);

            // ვამატებთ ახალ სიმბოლოს შედეგის ცვლადში
            result += newChar;
        } else {
            // თუ სიმბოლო ასო არ არის, მაშინ ვტოვებთ ჩვეულებრივად
            result += char;
        }
    }

    return result;
}

console.log(caesarCipher('abc', 2));
console.log(caesarCipher('xyz', 3));
console.log(caesarCipher('Hello, World!', 5));
console.log(caesarCipher('Python', 0));
console.log(caesarCipher('abc', -1));

