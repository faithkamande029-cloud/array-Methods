const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");

console.log(months)

const items = [1, 2, 3, 4];
// console.log(items); // [1, 2, 3]

const reversedItems = items.toReversed();
console.log(reversedItems); // [3, 2, 1]
console.log(items); // [1, 2, 3]

