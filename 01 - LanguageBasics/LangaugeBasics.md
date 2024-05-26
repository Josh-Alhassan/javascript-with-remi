# Language Basics

## Things to Learn

- Reviewing Syntax
- Working with Data Types
- Working with Flow Control Statement
- Understanding Functions

At the core of every language is a description of how it should work at the most basic level. This description typically defines syntax, operators, data types, and built-in functionality upon which complex solutions can be built.

## Reviewing Syntax

ECMAScript's syntax borrows heavily from C and other C like languages such as Java, and Perl.

### Case Sensitivity

Everything in JavaScript is _case-sensitive_; variables, function names, and operators are all case-sensitive, meaning that a variable named _"test"_ is different from a variable name _Test_.

### Identifiers

An _identifier_ is the name of a variable, function, property, or function argument. Identifiers maybe one or more characters in following format:

- The first character must be a letter, an underscore (\_), or a dollar sign ($).
- All other characters maybe letters, underscores, dollar sign or numbers.

Letters in an identifiers may include extended ASCII or unicode character such as A and /E, though this is _not recommended_.

By **convention**, ECMAScript identifiers use _camel-case_, meaning that the first letter is lowercase and each additional word is offset by a capital letter.

```
firstSecond
myCar
doSomethingImportant
```

Although, identifiers convention is _not strictly enforced_, it is considered a best practice to adhere to the built-in ECMAScript functions and objects.

**NOTE** _Keywords, reserved words, true, false, and null cannot be use as identifiers_

### Comments

ECMAScript uses C-style comments for both single line and block-comments. A Single-Line comment begins with two forward-slash characters, such as this:

`// single line comment`

A block-line comment begins with forward slash and asterik (/_) and ends with the opposite (_/), as in this example:

```
/* This is a multi-line
comment */
```

### Strict Mode

ECMAScript 5 introduced the concept of `strict mode`. **Strict mode** is a different **_parsing_** and **_execution model_** for JavaScript, where some of the erratic behavior of ECMAScript 3 is addressed and errors are thrown for unsafe activities. To enable strict mode for an entire script, include the following at the top:

`"use strict"`

Although it may look like a string that isn't assigned to a variable, this is a **_pragma_** that tells supporting JavaScript engines to change into strict mode. _This syntax was chosen specifically so as not to break ECMAScript 3 syntax_.

You may specify just a function to execute in _strict mode_ by including the pragma at the top of the function body.

```
function doSomething() {
    "use strict"
    // function body
}
```

`strict mode` changes many parts of how JavaScript is executed.

### Statements

Statements in ECMAScripts are terminated by a semicolon, though omitting th semicolon makes the parser determines where the end of the statement occurs, as in the following examples:

```
let sum = a + b // valid even without a semicolon - not recommended

let diff = a - b; // valid - prefer
```

Even though a semi-colon is not required at the end of statements, you should always include one:

- Helps prevents error of omission.
- Allow developers to compress ECMAScript code by removing extra-white space: Such compression causes syntax errors when lines do not end in semi-colon.
- Improves performance in certain situations: Because parses try to correct syntax errors by inserting semi-colons where they appear to belong.

Multiple statements can be combined into a code block by using C-style syntax beginning with left curly brace `({)` and ending a right curly brace `(})`:

```
if (test) {
    test = false;
    console.log(false)
}
```

Control Statements , such as "if" require code blocks only when executing multiple statements. However, it is considered a best practice to _always use code blocks_ with control statements, even if there's only one statement to be executed, as in the following examples:

```
// valid, but error-prone and should be avoided
if (test) console.log(test)

// Preffered
if (test) { console.log(test); }
```

### Keywords and Reserved Words

By rule, keywords are reserved and cannot be used as identifiers or property names.

The complete list of keywords for ECMAScript -262 sixth edition are as follows

break | do | in | typeof
case | else | instanceof | var
catch | export | new | void
class | extends | return | while
const | finally | super | with
continue| for | switch | yield
debugger| function| this |  
default | if | throw |  
delete | import | try |

**Always Reserved**

enum

**Reserved with Strict Mode**

implements | packages | Public
Interface | protected | static
let | private

**Reserved in Module Code**

await

**Note:** _It's best to avoid using both keywords and reserved words as both identifiers and property names to ensure compatibility with past and future ECMAScript editions._

### Variables

ECMAScript variables are loosely typed, meaning that a variable can hold any type of data. Every _variable_ is simply a _named placeholder_ for a value. There are three keywords that can be used to declare a variable: `var`, which is available in all ECMAScript versions, and `let`, and `const` which were introduced in ECMAScript 6.

### The Var Keyword

To define a variable, use the `var` operator, followed by the variable name, like this

```
var message;
```

The code above defines a variable named `message` that can be used to hold any value.

**Note:** \_Without initialization, a variable defined holds the special value `undefined`.

ECMAScript implements variable initialization, so it's possible to define a variable and set its value at the same time, as in the example:

```
var message = "hi";
```

Above, `message` is defined to hld a string value of `"hi"`. _Doing this initialization doesn't make the variable as being a **string** type:_ It's simply the assignment of a value to the variable.

It is possible to not only change the value stored in the variable but also change the type pf value, such as this.

```
var message = 'hi';
* message = 100; // legal, but not recommended. *
```

In this example, the variable `message` is first defined as having the string value "hi" and then over-written with the numeric value 100. Although it's not recommended to switch the data type that a variable contains, it is completely valid in ECMAScript.

### Var Declaration Scope

It's important to note that using the `var` operator to define a variable means _the variable defined_ is **local to the function scope** in which it was defined. For example, defining a variable inside a function using `var` means that the variable destroyed as soon as the function exits. _(variables defined cannot be accessed outside of the function scope)_. As shown here:

```
function test() {
    var message = "hi"; // local variable
}

test()

console.log(message); // error
```

Here, the `message` variable is defined within a function using `var`. The function is called `test()`, which creates the variable and assign its value. Immediately after that, the variable is destroyed so the last line in the example causes error. **It is, however, possible to define a variable globally by omitting the `var` operator as follows**

```
function test() {
    message = 'hi'; // global variable
}

test()
console.log(message); // hi - variable is not destroyed upon exit of the function
```

By removing the `var` operator from the example, the message _variable becomes global_. As soon as the function `test()` is called, the _variable_ is defined and becomes accessible outside of the function once it has been executed.

**NOTE:** Although it is possible to define global variables by omitting the `var` operator, this approach is not recommended. Global variables declared locally are are hard to maintain and cause confusion. _Strict Mode_ throws `ReferenceError` when an undeclared variable is assigned a value ( message = "Hi").

If you need to define more than one variable, you can do it using a single statement, separating each variable (and optional initialization) with a comma like this:

```
var message = "hi",
    found = false,
    age = 29;
```

Because ECMAScript is loosely typed, variable initializations using different data types maybe combined into a single statement.

**NOTE:** _When you're running in Strict Mode, you cannot define variables named **eval** or **arguments**, doing so results to **syntax error** ._

### Var Declaration Hoisting

When using `var`, the following is possible, _because variable declared using that keyword are hoisted to the top of the function scope._

```
function foo() {
    console.log(age);
    var age = 26;
}

foo() // undefined
```

The above code doesn't throw an error because the ECMAScript _runtime_ technically treats it like this:

```
function foo() {
    var age;
    console.log(age);
    age = 26;
}

foo() // undefined
```

**Hoisting** is where the interpreter pulls all variable declarations to the top of its scope. It also allows you to use _redundant_ `var` declaration without penalty.

```
function foo() {
    var age = 16;
    var age = 26;
    var age = 36;
    console.log(age);
}

foo(); // 36
```

### Let Declaration

`let` operates in nearly the same way as `var`, but with some important difference. _Most notable is that `let` is **blocked scope**, but `var` is **function scoped**._

```
if (true) {
    var name = "Joshua";
    console.log(name); // Joshua
}

console.log(name); // Joshua
```

_Block Scope_ is strictly a subset of function scope. So any scope limitation that apply to `var` declarations will also apply to `let` declarations.

A `let` declaration also does not allow for any redundant declarations within a block scope. Doing so (allowing redundant declaration) will result to an error.

```
var name;
var name;

let age;
let age; // SyntaxError: Identifier 'age' has already been declared.
```

**Nesting** using identical identifier behaves as you would expect with no errors because no re-declaration is occurring.

```
var name = "Nicholas";
console.log(name); // Nicholas

if(true) {
    var name = "Matt";
    console.log(name); // Matt
}

// using let keyword

let age = 20;
console.log(age); // 30

if (true) {
    let age = 26;
    console.log(age); // 26
}
```

**The different keywords (let, var) do not declare different types of variables - they just specify how the variables exist inside the relevant scope.**

```
var name;
let name; // SyntaxError

let age;
var age; // SyntaxError
```

### Temporal Dead Zone

Another important behavior of `let` distinguishing it from `var` is that `let` declaration cannot be used in a way that assumes hoisting.

```
// name is hoisted
console.log(name); // undefined
var name = 'Matt'

// age is not hoisted
console.log(age); // ReferenceError, age is not defined
let age = 26;
```

When passing the code, JavaScript engine will still be aware of the `let` declarations that appear later in a block, but _those variables will be unable to be referenced in anyway before the actual declaration occur_. THE SEGMENT OF EXECUTION that occurs before declaration is referred to as the **Temporal Dead Zone**, and any attempted reference to these variables will throw a _ReferenceError_.
