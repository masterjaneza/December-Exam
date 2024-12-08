// Xbonacci Sequence 

function xbonacci(x, n) {
    // შევქმენით სია, სადაც დავამატეთ მნიშვნელობა for ციკლის დახმარებით
    let res = [];
    for(let i = 0; i < x; i++) {
        res.push(1) // დაემატება 1 სიაში
    }

    // ახალი მნიშვნელობების დამატება while ციკლით
    while(res.length < n) {
        let sum = 0;
        
        // ვაჯამებთ შედეგის მასიცში ბოლო x რიცხვს
        for(let i = res.length - x; i < res.length; i++) {
            sum += res[i]
        }
        res.push(sum) // სიაში ჩაემატება ჯამი
    }
    return res; // დაბრუნდება სია
}

console.log(xbonacci(3, 10))