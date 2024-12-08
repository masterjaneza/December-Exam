//  Find the Kth Smallest Element in an Array -- normal


function kthSmallest(arr, k) {
    // დავალაგეთ სია და შემდეგ ამოვიცნეთ ყველაზე პატარა რიცხვი
    return arr.sort((a,b) => a - b)[k - 1]
}

console.log(kthSmallest([3, 2, 1, 5, 6, 4], 2));
console.log(kthSmallest([3, 2, 1, 5, 6, 4], 4));
console.log(kthSmallest([7, 10, 4, 3, 20, 15], 3));
console.log(kthSmallest([1, 2, 3, 4, 5], 1));
console.log(kthSmallest( [1, 2, 3, 4, 5], 5));
