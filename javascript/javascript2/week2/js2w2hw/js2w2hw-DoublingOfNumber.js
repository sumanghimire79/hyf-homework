let numbers = [1, 2, 3, 4];
let newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    newNumbers[i] = numbers[i] * 2;
  }
}

console.log("The doubled numbers are", newNumbers); // [2, 6]

// the above function can be written as below that doubles the odd number in the array
const answer = numbers
  .filter((number) => number % 2 != 0)
  .map((number) => number * 2);
console.log(answer);
