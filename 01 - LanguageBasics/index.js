// Var Declaration Scope
function test() {
  var message = "hello world"; // local scope
}

test();
// console.log(message);

function test2() {
  message = "Hello Global"; // Global scope
}

test2();
console.log(message);

// Var Declaration Hoisting
function fooHoist() {
  console.log(age);
  var age = 26;
}

console.log(fooHoist());

// ------- Let Declaration ---------

// using `var` operator
if (true) {
  var name = "Matt";
  console.log(name);
}

console.log(name);

// using `let` operator
if (true) {
  let age = 26;
  console.log(age);
}

// console.log(age);

// Nesting - but using identical identifiers
var nestName = "Nicholas";
console.log(nestName);

if (true) {
  var nestName = "Matt";
  console.log(nestName);
}

// Using let keyword
let nestAge = 39;
console.log(nestAge);

if (true) {
  let nestAge = 26;
  console.log(nestAge);
}
