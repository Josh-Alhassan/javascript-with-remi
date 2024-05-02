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

// --- Merging Objects ---
let dest, src, result;

dest = {};
src = { id: "src" };
result = Object.assign(dest, src);
console.log(result);

// Object type checking
console.log(dest === result);
console.log(dest !== src);
console.log(result);
console.log(dest);

dest = {};
result = Object.assign(dest, { a: "foo" }, { b: "bar" });
console.log(result);

// --- Object Identity and Equality ---
console.log(true === 1);
console.log({} == {});
console.log("2" === 2);

// These have different representations
console.log(+0 === -0);
console.log(+0 === 0);
console.log(-0 === 0);

// NaN equivalence
console.log(NaN === NaN);
console.log(isNaN(NaN));

// ECMAScript 6 Remedy Solution
console.log(Object.is(true, 1));
console.log(Object.is({}, {}));
console.log(Object.is("2", 2));

console.log(Object.is(+0, -0));
console.log(Object.is(+0, 0));
console.log(Object.is(-0, 0));

// Correct NaN Equivalence
console.log(Object.is(NaN, NaN));

// --- Enhanced Object Syntax ---
// ==> Property Value Shorthand
let name = "Joshua";
let personObj = {
  name,
};
console.log(personObj);
console.log(personObj.name);

// Minifiers examples
function makePerson(name, age) {
  return {
    name,
    age,
  };
}

let personObj2 = makePerson("Joshua", 26);
personObj2;
console.log(personObj2.name);
console.log(personObj2.age);

// ==> Computed Property Keys
const nameKey = "name";
const ageKey = "age";
const jobKey = "job";
let uniqueToken = 0;

let newPersonObj = {
  [nameKey]: "Abel",
  [ageKey]: 26,
  [jobKey]: "Software Engineer",
};

console.log(newPersonObj);

// computed property complex expressions
function getUniqueKey(key) {
  return `${key}_${uniqueToken++}`;
}

let newPersonObjFunc = {
  [getUniqueKey(nameKey)]: "Joshua",
  [getUniqueKey(ageKey)]: 26,
  [getUniqueKey(jobKey)]: "Frontend Engineer",
};

console.log(newPersonObjFunc);

// --------------
// Concise Method Syntax
// --------------

let personMethod1 = {
  sayName: function (name) {
    return `My name is ${name}`;
  },
};

const methodResult = personMethod1.sayName("Joshua");
console.log(methodResult);

const personMethod2 = {
  sayName(name) {
    return `My second method name is ${name}`;
  },
};

console.log(personMethod2.sayName("Alhassan"));

// shorthand method and computed property keys ae mutually compatible.
const methodKey = "SayNames";

let personShorthandObj = {
  [methodKey](firstName, surname) {
    return `My first name is ${firstName}, and my surname is ${surname}`;
  },
};

console.log(personShorthandObj.SayNames("Joshua", "Alhassan"));
personShorthandObj;

console.log(
  `She has ended up seperating my mouse into two halves ${personShorthandObj.SayNames()}`
);

// ------------------------
// Object Destructuring
// ------------------------

let personDestructure = {
  name: "Matt",
  age: 27,
};

// Without Destructuring
let destPersonName = personDestructure.name,
  destPersonAge = personDestructure.age;

console.log(destPersonName);
console.log(destPersonAge);

// Using Destructure
let { name: personName, age: personAge } = personDestructure;
console.log(personName, personAge);
