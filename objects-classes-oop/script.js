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

// ---- Accessor Properties ----
let book = {
  year_: 2017,
  edition: 1,
};

Object.defineProperty(book, "year", {
  get() {
    return this.year_;
  },

  set(newValue) {
    if (newValue > 2017) {
      this.year_ = newValue;
      this.edition += newValue - 2017;
    }
  },
});

console.log(book);
book.year = 2019;
console.log(book.edition);

// Defining Multiple Properties
let book2 = {};
Object.defineProperties(book2, {
  year_: {
    value: 2017,
  },
  edition: {
    value: 1,
  },

  year: {
    get() {
      return this.year_;
    },

    set(newValue) {
      if (newValue > 2017) {
        this.year_ = newValue;
        this.edition += newValue - 2017;
      }
    },
  },
});

console.log(book2);
book.year = 2019;
console.log(book.edition);

// --- Reading Property Attributes ---
// Object.getOwnPropertyDescriptor()

let descriptor = Object.getOwnPropertyDescriptor(book2, "year_");
console.log(descriptor);
console.log(descriptor.value);
console.log(descriptor.configurable);
console.log(typeof descriptor.get);

let descriptor2 = Object.getOwnPropertyDescriptor(book2, "year");
console.log(descriptor2);
console.log(descriptor2.value);
console.log(descriptor2.configurable);
console.log(typeof descriptor2.get);

// Object.getOwnPropertyDescriptors() - Static Method
console.log(Object.getOwnPropertyDescriptors(book2));
