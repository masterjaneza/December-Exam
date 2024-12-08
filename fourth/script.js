// Generate Pascal’s Triangle Up to a Given Row

function generatePascalTr(rows) {
    // შეიქმნა სია
    let triangle = []

    // for ციკლის დახმარებით გადავუარეთ rows
    for(let i = 0; i < rows; i++) {
        let row = [] // შეიქმნა სია
      

        // ჩავაშენეთ for ციკლი სადაც ამოწმებს სხვადასხვა პირობას
        for(let j = 0; j <= i; j++) {    
            // თუ პირობა ჭეშმარიტია, მაშინ სიაში ჩაამატებს 1
            if(j === 0 || j === i) {
                row.push(1)
             
            } else { // შექმნის პასკალის triangle - ის ელემენტს, ყველა ელემენტი არის წინა რიგირს ორი ელემენტის ჯამი
                row.push(triangle[i-1][j-1] + triangle[i-1][j])
            }
        }
        triangle.push(row)
    }
    return triangle
}

console.log(generatePascalTr(1));
console.log(generatePascalTr(2));
console.log(generatePascalTr(3));
console.log(generatePascalTr(4));
console.log(generatePascalTr(5));
