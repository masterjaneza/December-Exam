// Count the Number of Unique Words in a Text

function uniqueWirdCount(txt) {
    // ასობგერები გადაიქცა პატარა ასოებად, გამოიყო ერთმანეთისგან და შემდეგ გაიფილტრა(Boolean - ეს არის ფილტრის მეთოდი რომელიც ფილტრაბს მცდარ მნიშვნელობებს როგორიცაა '', null და კიდევ ბევრი)
    let words = txt.toLowerCase().split(/[^a-z]+/).filter(Boolean)

    // ამოშლის ერთი და იგივე სიტყვას ციკლის დახმარებით
    let uniqueWordArr = [];
    for(let word of words) {
        if(!uniqueWordArr.includes(word)) {
            uniqueWordArr.push(word)
        }
    }
    // დააბრუნებს სიის სიგრძეს
    return uniqueWordArr.length
}

console.log(uniqueWirdCount('The quick brown fox jumps over the lazy dog'))
console.log(uniqueWirdCount('Hello hello world!'))
console.log(uniqueWirdCount(''))
console.log(uniqueWirdCount('Python is fun. Python is cool.'))
console.log(uniqueWirdCount('One word'))
