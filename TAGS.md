# Tags

This document aims to provide reasoning why `config.json` contains the `"tags"` it contains.

It uses as a basis the JavaScript's [TAGS.md](https://github.com/exercism/javascript/blob/main/TAGS.md) because anything that JavaScript does can be done with TypeScript, being a transpiled language, and adds/modifies with the perks TypeScript brings on top of it.

## Paradigms

- [x] `paradigm/declarative`: mostly popularised by libraries and frameworks such as React, Vue, etc.
- [x] `paradigm/functional`: there is a lot of support for functional programming, including various defactor libraries in the ecosystem providing functional programming patterns.
- [x] `paradigm/imperative`: It retains JavaScript's script and DOM's manipulation imperative programming, but the language design doesn't encourage it.
- [ ] `paradigm/logic`: whilst it is possible to write DSL or patterns that' allow for logic-based programming, JavaScript doesn't inherently support it.
- [x] `paradigm/object_oriented`: becomes a main feature of the language compared to JavaScript, along with static type checking and a rich type system.

## Typing

- [x] `typing/static`: Will check types at compile time for any part of the code which has its types stated.
- [x] `typing/dynamic`: At runtime all TypeScript's type information is stripped. Runtime type checking can also be manually achieved, as well.
- [x] `typing/strong`: TypeScript adds a rich type system, that is checked at compile time if used.
- [x] `typing/weak`: TypeScript allows for explicit (strong) typing, inferred (weak) typing, deferred (computed / conditional) typing, opt-out (using `any`) of typing, and forced run-time (using `unknown`) typing.

## Execution mode

- [x] `execution_mode/compiled`: TypeScript transpilation (transpilation via [`tsc`](https://www.typescriptlang.org/), or stripping types and then compiling using [`@babel/preset-typescript`](https://babeljs.io/docs/en/babel-preset-typescript)) compiles the code to a certain version of JavaScript. This includes in-memory compilation using tools such as [`ts-node`](https://github.com/TypeStrong/ts-node), however due to the in-line nature and REPL like support, it might be considered interpreted.
- [x] `execution_mode/interpreted`: TypeScript _can_ be interpreted Just-In-Time by stripping types, for example using [`@babel/preset-typescript`](https://babeljs.io/docs/en/babel-preset-typescript). 

## Platform

- [x] `platform/windows`: popularised by Electron and Node
- [x] `platform/mac`: popularised by Electron and Node
- [x] `platform/linux`: popularised by Electron and Node
- [x] `platform/ios`: popularised by PhoneGap/Cordova, Ionic, React-Native
- [x] `platform/android`: popularised by PhoneGap/Cordova, Ionic, React-Native
- [x] `platform/web`: used in frontend frameworks like Angular

## Runtime

- [ ] `runtime/standalone_executable`: it doesn't. Any executable that exists packages Node, or requires Node or a Browser.
- [x] `runtime/language_specific`: it runs on Node
- [ ] `runtime/clr`: it doesn't
- [ ] `runtime/jvm`: it doesn't
- [ ] `runtime/beam`: it doesn't
- [x] `runtime/wasmtime`: Just like JavaScript, it doesn't natively, but JavaScript can compile to WASM, and thus then run on wastime. It's a bit of a cheat, but probably what people will search for.

## Used for

- [x] `used_for/artificial_intelligence`: popularised by TensorFlow
- [x] `used_for/backends`: popularised by Express
- [x] `used_for/cross_platform_development`: popularised by PhoneGap/Cordova, Ionic, React-Native, Electron and more
- [ ] `used_for/embedded_systems`: It's possible to run the transpiled JavaScript on microcontrollers and IoT platforms, but the low-end nature makes it not a viable, professional, solution. Therefore this is not included.
- [ ] `used_for/financial_systems`: Although it improves in the type safeness department, TypeScript being still JavaScript makes it too slow for fintech.
- [x] `used_for/frontends`: Most TypeScript usage is with Frontend frameworks.
- [x] `used_for/games`: probably one of the most popular replacements for browser-based games.
- [x] `used_for/guis`: same reason as frontends, which is more and more interesting as libraries such as React can now also render to less common/expected displays, such as terminals (and thus be used to build GUIs), not requiring CSS or other ways to provide styling.
- [x] `used_for/mobile`: yep, see platform
- [ ] `used_for/robotics`: it's possible. Things like Johnny-Five help a lot. However, it's not a _go to_ language to provide robotics programming, so it's not included.
- [ ] `used_for/scientific_calculations`: possible, and not uncommon especially for _visualisation_ (for example d3), but not a _go to_ language to do scientific calculations, so it's not included.
- [ ] `used_for/scripts`: You could still transpile your TypeScript files, but is usually not worth the hassle, so is not used for scripting at all compared to JavaScript
- [x] `used_for/web_development`: yes
