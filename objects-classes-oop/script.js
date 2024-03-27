// "use strict"

// Object Instance
let person = new Object();
person.name = "Joshua";
person.age = 26;
person.job = "Software Engineering";
person.sayName = function () {
  console.log(this.name);
};

// Logged Values
console.log(person);
person.sayName();

// Object Literal
let person2 = {
  name: "Joshua",
  age: 26,
  job: "Software Engineer",
  sayName() {
    console.log(this.name);
  },
};

// Logged Values
console.log(person2);

// Type of Properties -- Data Properties
Object.defineProperty(person2, "name", {
  writable: false,
  configurable: false,
  value: "Alhassan",
});

console.log(person2.name);
person2.name = "Abel";
delete person2.name;
console.log(person2.name);
