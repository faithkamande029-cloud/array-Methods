// splice() method
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");

console.log(months)

// toReversed() method
const items = [1, 2, 3, 4];
// console.log(items); // [1, 2, 3]

const reversedItems = items.toReversed();
console.log(reversedItems); // [3, 2, 1]
console.log(items); // [1, 2, 3]

// foEach() method
const array = ["x", "y", "z"];

array.forEach((element) => console.log(element));

// filter() method
const words = ["splash", "snot", "safaricom", "demonstate", "personalise"];

const result = words.filter((word) => word.length > 7);

console.log(result);

// reduce() method
const numArray = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 1;
const sumWithInitial = numArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 11