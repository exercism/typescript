# Introduction

TypeScript is JavaScript with syntax for types, making it a a strongly typed programming language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles, giving you better tooling at any scale.

Because [you cannot learn TypeScript without learning JavaScript][handbook-js-or-ts], some of the content in this Track is focused on teaching JavaScript concepts and some of the concepts focus on TypeScript specific features only.

## (Re-)Assignment

There are a few primary ways to assign values to names in TypeScript - using variables or constants.
On Exercism, variables are always written in [camelCase][wiki-camel-case]; constants are written in [SCREAMING_SNAKE_CASE][wiki-snake-case].
There is no official guide to follow, and various companies and organizations have various style guides.
_Feel free to write variables any way you like_.
The upside from writing them the way the exercises are prepared is that they'll be highlighted differently in the web interface and most IDEs.

Variables in TypeScript can be defined using the [`const`][mdn-const], [`let`][mdn-let] or [`var`][mdn-var] keyword.

A variable can reference different values over its lifetime when using `let` or `var`.
For example, `myFirstVariable` can be defined and redefined many times using the assignment operator `=`:

```typescript
let myFirstVariable = 1
myFirstVariable = 0
myFirstVariable = 42
```

In contrast to `let` and `var`, variables that are defined with `const` can only be assigned once.
This is used to define constants in TypeScript.

```typescript
const MY_FIRST_CONSTANT = 10

// Can not be re-assigned.
MY_FIRST_CONSTANT = 20
// => TypeError: Assignment to constant variable.
```

Because TypeScript can detect this statically, the TypeScript compiler will also yield an error:

```typescript
// ^? Cannot assign to 'MY_FIRST_CONSTANT' because it is a constant.(2588)
```

This means you don't need to run the code to detect the `TypeError`.

> 💡 In a later Learning Exercise, the difference between _constant_ assignment / binding and _constant_ value is explored and explained.

## Type inference

Without diving too deep into the subject of [type inference][handbook-type-inference], you should be aware that an assigned variable usually as an inferred type, even without a type annotation.

```typescript
const MY_FIRST_CONSTANT = 10
// ^? const MY_FIRST_CONSTANT: number
```

This type is then enforced throughout the code.
This also means that where the following code is valid JavaScript:

```javascript
let myFirstVariable = 1
myFirstVariable = 'Some string'
```

It complains when using TypeScript:

```typescript
let myFirstVariable = 1
myFirstVariable = 'Some string'
// ^? Type 'string' is not assignable to type 'number'.(2322)
```

This feature ensures type-safety even when type annotations are not used.

## Function Declarations

In TypeScript, units of functionality are encapsulated in _functions_, usually grouping functions together in the same file if they belong together.
These functions can take parameters (arguments), and can _return_ a value using the `return` keyword.
Functions are invoked using `()` syntax.

```typescript
function add(num1: number, num2: number): number {
  return num1 + num2
}

add(1, 3)
// => 4
```

Function parameters should usually be annotated with a type using a colon (`:`) followed by the type.
Function return values can be annotated after closing the parameter list using a colon (`:`) followed by the type.

> 💡 In TypeScript there are _many_ different ways to declare a function.
> These other ways look different than using the `function` keyword.
> The track tries to gradually introduce them, but if you already know about them, feel free to use any of them.
> In most cases, using one or the other isn't better or worse.

## Type Annotations

As shown in the function declaration for `add`, the parameters have an explicit type annotation `: number`.
Variable declarations, class properties, function declarations and more all support type annotations.

Both explicit type annotation as inferred types are enforced by the type-checker.

```typescript
add('foo', 3)
// ^? Argument of type 'string' is not assignable to parameter of type 'number'.(2345)
```

## Exposing to Other Files

To make a `function`, a constant, or a variable available in _other files_, they need to be [exported][mdn-export] using the `export` keyword.
Another file may then [import][mdn-import] these using the `import` keyword.
This is also known as the module system.
A great example is how all the tests work.
Each exercise has at least one file, for example `lasagna.ts`, which contains the _implementation_.
Additionally, there is at least one other file, for example `lasagna.test.ts`, that contains the _tests_.
This file _imports_ the public (i.e. exported) entities to test the implementation:

```typescript
// file.ts
export const MY_VALUE = 10

export function add(num1, num2) {
  return num1 + num2
}

// file.test.ts
import { MY_VALUE, add } from './file.js'

add(MY_VALUE, 5)
// => 15
```

[mdn-const]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
[mdn-export]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
[mdn-import]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
[mdn-let]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
[mdn-var]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
[handbook-js-or-ts]: https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html#learning-javascript-and-typescript
[handbook-type-inference]: https://www.typescriptlang.org/docs/handbook/type-inference.html
[wiki-camel-case]: https://en.wikipedia.org/wiki/Camel_case
[wiki-snake-case]: https://en.wikipedia.org/wiki/Snake_case
