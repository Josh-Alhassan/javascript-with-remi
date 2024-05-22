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
