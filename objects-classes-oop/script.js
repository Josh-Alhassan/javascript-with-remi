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

// Reuse property as Local Variable
let personLocalVariable = {
  nameLocal: "Matt",
  age: 27,
};

let { nameLocal, age } = personLocalVariable;
console.log(personLocalVariable);

console.log(nameLocal);
console.log(age);

// Referencing Properties that do not exist
let personReference = {
  nameRef: "Matt",
  ageRef: 27,
};

// _______
let { nameRef, job } = personReference;
console.log(nameRef);
console.log(job);

// Defining Default Values
let personDefaultValue = {
  nameDefaultVal: "Joshua",
  ageDefaultVal: 27,
};

// ________
let { nameDefaultVal, ageDefaultVal } = personDefaultValue;
console.log(nameDefaultVal, (job = "Software Engineer"));
console.log(job);
console.log(personDefaultValue); // Job property not added to Object

// -------------
// Object Creation
// -------------

// Factory Function - Create Object with specific Interfaces
function createPerson(name, age, job) {
  let obj = new Object();
  obj.name = name;
  obj.age = age;
  personObj.job = job;
  obj.sayName = function () {
    return this.name;
  };

  return obj;
}

let createPerson1 = createPerson("Nicholas", 29, "Software Engineer");
let createPerson2 = createPerson("Greg", 27, "Doctor");

console.log(createPerson1);
console.log(createPerson2);

// ________
// Function Constructor Pattern

function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.mentionName = function () {
    return this.name;
  };
}

let personConstructor1 = new Person("Nicholas", 29, "software Engineer");
let personConstructor2 = new Person("Greg", 27, "Doctor");

console.log(personConstructor1);
console.log(personConstructor1.mentionName());

console.log(personConstructor2);
console.log(personConstructor2.mentionName());

// Test - Each of these objects as a `constructor` property that points back to the `Person`, as follows:
let constructorTest1 = personConstructor1.constructor == Person;
constructorTest1;
// console.log(personConstructor1.constructor())
let constructorTest2 = personConstructor2.constructor == Person;
console.log(constructorTest2);

// -- Tests with `instanceof` which is considered safer
console.log(personConstructor1 instanceof Object);
console.log(personConstructor1 instanceof Person);
console.log(personConstructor2 instanceof Object);
console.log(personConstructor2 instanceof Person);

// Constructor functions as Functions Expression
let PersonExpression = function (name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function () {
    return this.name;
  };
};

// Constructor function parenthesis optional
function PersonOptional() {
  this.name = "Jake";
  this.mentionName = function () {
    return this.name;
  };
}

let personOption1 = new PersonOptional();
let personOption2 = new PersonOptional();

console.log(personOption1.mentionName());
console.log(personOption2.mentionName());

// Tests
console.log(personOption1 instanceof Object);
console.log(personOption1 instanceof PersonOptional);
console.log(personOption2 instanceof Object);
console.log(personOption2 instanceof PersonOptional);

// -----------
// Constructors as Functions
// -----------

let constFuncPerson = new Person("Nicholas", 29, "Software Engineer");
console.log(constFuncPerson.mentionName());

// Call as a Function
Person("Greg", 27, "Doctor");
// window.mentionName()

// Call in the scope of a new Object
let newObj = new Object();
Person.call(newObj, "Kristen", 25, "Nurse");
console.log(newObj.mentionName());

// -----------
// Problems with Constructors
// -----------

// Functions are OBJECTS - Every time a function is defined, it's actually an object being instantiated
function ProblemWithConstructPerson(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;

  this.sayName = new Function(console.log(this.name)); // Logical Equivalent
  // Same as
  /*
    this.sayName = function() {
      console.log(this.name)
    }
   */
}

console.log(personConstructor1.mentionName === personConstructor2.mentionName);

// Solution - Better way to solve the constructor problem
function SolutionProblem(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = sayName;
}

function sayName() {
  console.log(this.name);
}

let solutionPerson1 = new SolutionProblem("Nicholas", 29, "Software Engineer");
let solutionPerson2 = new SolutionProblem("Greg", 27, "Doctor");

solutionPerson1.sayName();
solutionPerson2.sayName();
