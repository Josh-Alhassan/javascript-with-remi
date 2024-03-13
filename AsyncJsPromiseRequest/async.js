// Call Stack

const multiply = (x, y) => x * y;

const square = (x) => multiply(x, x);

const isRightTriangle = (a, b, c) => {
  return square(a) + square(b) === square(c);
};

console.log(isRightTriangle(3, 4, 5));

// How Asynchronous JavaScript Actually works
console.log("I Happened First");
setTimeout(() => {
  console.log(" I happened 3rd");
}, 3000);

console.log("I happened 2nd");
