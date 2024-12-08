// Reverse the Order of Words in a Sentence --- Easy


function reverseWord(txt) {
    // ტექსტს გაყოფს შუაზე, შემდეგ შემოაბრუნებს და ერთმანეთთან გააერთიანებს
    return txt.split(' ').reverse().join(' ')
}

console.log(reverseWord('Hello Word'));
console.log(reverseWord('Python is great'));
console.log(reverseWord('a b c'));
console.log(reverseWord(''));
console.log(reverseWord(' Spaces'));
