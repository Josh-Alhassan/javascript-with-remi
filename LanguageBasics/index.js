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
