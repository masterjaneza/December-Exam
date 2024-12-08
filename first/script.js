// Check If Two Strings Are Anagrams

function isAnagrams(str1, str2) {
    // პატარა ასობგერებად გადაქცევა
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();


    //  მასივის შექმნა/ზედმეტი ადგილების/spaces მოშლა
    let str1Array = [];
    let str2Array = [];

    for(let i = 0; i < str1.length; i++) {
        if(str1[i] !== ' ') {
            str1Array.push(str1[i])
        }
    }

    for(let i = 0; i < str2.length; i++) {
        if(str2[i] !== ' ') {
            str2Array.push(str2[i])
        }
    }


    // სიგრძეების შედარება, თუ სიგრძე არ უდრის ერთმანეთს, მაშინ false გამოიტანს
    if(str1Array.length !== str2Array.length) {
        return false;
    }


    // მასივების დალაგება და შედარება

    str1Array.sort();
    str2Array.sort();

    for(let i = 0; i < str1Array.length; i++) {
        if(str1Array[i] !== str2Array[i]) {
            return false;
        }
    }
    
    return true;

}

console.log(isAnagrams('listen', 'silent'))
console.log(isAnagrams('triangle', 'integral'))
console.log(isAnagrams('apple', 'pale'))
console.log(isAnagrams('a', 'a'))
console.log(isAnagrams('rat', 'car'))