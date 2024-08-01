# About

TypeScript is JavaScript with syntax for types, making it a a strongly typed programming language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles, giving you better tooling at any scale.
It has a few [primitives][mdn-primitive], and everything else is considered an object.

While JavaScript is the most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js.
The language is actively being developed; and because of its multi-paradigm property, allows for many styles of programming.

TypeScript builds on-top of this and is also actively developed.
In some rankings from 2023 it is more popular than JavaScript in daily use.

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
myFirstVariable = 'Some string'
myFirstVariable = new SomeComplexClass()
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

### Constant Assignment

The `const` keyword is mentioned _both_ for variables and constants.
Another concept often mentioned around constants is [(im)-mutability][wiki-mutability].

The `const` keyword only makes the _binding_ immutable, that is, you can only assign a value to a `const` variable once.
In TypeScript, only [primitive][mdn-primitive] values are immutable.
However, [non-primitive][mdn-primitive] values can still be mutated.

```typescript
const MY_MUTABLE_VALUE_CONSTANT = { food: 'apple' }

// This is possible
MY_MUTABLE_VALUE_CONSTANT.food = 'pear'

MY_MUTABLE_VALUE_CONSTANT
// => { food: "pear" }
```

### Constant Value (Immutability)

As a rule, on Exercism, and many other organizations and project style guides, don't mutate values that look like `const SCREAMING_SNAKE_CASE`.
Technically the values _can_ be changed, but for clarity and expectation management on Exercism this is discouraged.
When this _must_ be enforced, use [`Object.freeze(value)`][mdn-object-freeze].

Where possible, the TypeScript keyword `readonly`, `as const`, or `Readonly<T>` generic type may be used to enforce immutability statically.
You will learn more about this subject later.

```typescript
const MY_VALUE_CONSTANT = Object.freeze({ food: 'apple' })

MY_VALUE_CONSTANT.food = 'pear'
// ^? Cannot assign to 'food' because it is a read-only property.(2540)

MY_VALUE_CONSTANT
// => { food: "apple" }
```

In the wild, it's unlikely to see `Object.freeze` all over a code base, but the rule to not mutate a `SCREAMING_SNAKE_CASE` value ever, is a good rule; often enforced using automated analysis such as a linter.

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

If a function does not have a type annotation for its return value, the type will be inferred.

```typescript
function add(num1: number, num2: number) {
  return num1 + num2
}

add(1, 3)
// ^? function add(num1: number, num2: number): number
```

Here the return type was inferred because TypeScript knows that the result of `number + number` must always be `number`.

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

If TypeScript does not find an explicit type annotation and cannot infer the type, it will assign the `any` type, which [you should not use][handbook-dont-use-any].
Later you will learn about the `unknown` type as a good alternative.

## Export and Import

The `export` and `import` keywords are powerful tools that turn a regular TypeScript file into a [TypeScript module][mdn-module].
Apart from allowing code to selectively expose components, such as functions, classes, variables and constants, it also enables a whole range of other features, such as:

- [Renaming exports and imports][mdn-renaming-modules], which allows you to avoid naming conflicts,
- [Dynamic Imports][mdn-dynamic-imports], which loads code on demand,
- [Tree shaking][blog-tree-shaking], which reduces the size of the final code by eliminating side-effect free modules and even contents of modules _that are not used_,
- Exporting [_live bindings_][blog-live-bindings], which allows you to export a value that mutates everywhere it's imported if the original value mutates.

A concrete example is how the tests work on Exercism's TypeScript Track.
Each exercise has at least one implementation file, for example `lasagna.ts`, and each exercise has at least one test file, for example `lasagna.test.ts`.
The implementation file uses `export` to expose the public API and the test file uses `import` to access these, which is how it can test the implementation's outcomes.

```typescript
// file.js
export const MY_VALUE = 10

export function add(num1, num2) {
  return num1 + num2
}

// file.spec.js
import { MY_VALUE, add } from './file.js'

add(MY_VALUE, 5)
// => 15
```

Because the TypeScript compiler does _not rewrite import paths_, the imports should be written using the `.js` extension (as that's what it will become after transpilation).
However, the option `allowImportingTsExtensions` is on because we have a process that rewrites the paths.
This allows importing from `.ts` (as well as `.js`).

In older code you will find imports _without file extension_.

[blog-live-bindings]: https://2ality.com/2015/07/es6-module-exports.html#es6-modules-export-immutable-bindings
[blog-tree-shaking]: https://bitsofco.de/what-is-tree-shaking/
[mdn-const]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
[mdn-dynamic-imports]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#Dynamic_Imports
[mdn-let]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
[mdn-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
[mdn-object-freeze]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
[mdn-primitive]: https://developer.mozilla.org/en-US/docs/Glossary/Primitive
[mdn-renaming-modules]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#Renaming_imports_and_exports
[mdn-var]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
[handbook-dont-use-any]: https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#any
[handbook-js-or-ts]: https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html#learning-javascript-and-typescript
[handbook-type-inference]: https://www.typescriptlang.org/docs/handbook/type-inference.html
[wiki-mutability]: https://en.wikipedia.org/wiki/Immutable_object
[wiki-camel-case]: https://en.wikipedia.org/wiki/Camel_case
[wiki-snake-case]: https://en.wikipedia.org/wiki/Snake_case
