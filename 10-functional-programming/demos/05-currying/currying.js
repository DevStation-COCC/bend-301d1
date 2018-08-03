let myPow = (b, x) => Math.pow(b, x);


let powersOf = x => {
  return b => Math.pow(b, x);
}

let powersOfTwo = powersOf(2);

console.log('powersOfTwo(2): ' + powersOfTwo(2)); //myPow(2, 2);
console.log('powersOfTwo(3): ' + powersOfTwo(3)); //myPow(3, 2);
console.log('powersOfTwo(4): ' + powersOfTwo(4)); //myPow(4, 2);

let powersOfThree = powersOf(3);


console.log('powersOfThree(3): ' + powersOfThree(3));
console.log('powersOfTwo(5): ' + powersOfTwo(5));