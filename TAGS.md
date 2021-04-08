# Tags

This document aims to provide reasoning why `config.json` contains the `"tags"` it contains.

It uses as a basis the Javacript's [TAGS.md](https://github.com/exercism/javascript/blob/main/TAGS.md) because anything that Javascript does can be done with Typescript, being a transpiled language, and adds/modifies with the perks Typescript brings on top of it.

## Paradigms

- [x] `paradigm/declarative`: mostly popularised by libraries and frameworks such as React, Vue, etc.
- [x] `paradigm/functional`: there is a lot of support for functional programming, including various defactor libraries in the ecosystem providing functional programming patterns.
- [x] `paradigm/imperative`: It retains Javascript's script and DOM's manipulation imperative programming, but the language design doesn't encourage it.
- [ ] `paradigm/logic`: whilst it is possible to write DSL or patterns that' allow for logic-based programming, JavaScript doesn't inheritly support it.
- [x] `paradigm/object_oriented`: becomes a main feature of the language compared to Javascript, along with static type checking and a rich type system.

## Typing

- [x] `typing/static`: will check types at compile time for any part of the code which has its types stated.
- [x] `typing/dynamic`: done at runtime for any data that uses the `any` keyword.
- [x] `typing/strong`: Typescript adds a rich type system, that is check at compile time if used.
- [x] `typing/weak`: Allows for use of weak typing using the `any` keyword.

## Execution mode

- [x] `execution_mode/compiled`: Typescript transpilation compiles the code to Javascript
- [ ] `execution_mode/interpreted`: Although is transpiled to Javascript (which is interpreted), Typescript code is never directly interpreted.

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
- [x] `runtime/wasmtime`: Just like Javascript, it doesn't natively, but JavaScript can compile to WASM, and thus then run on wastime. It's a bit of a cheat, but probably what people will search for.

## Used for

- [x] `used_for/artificial_intelligence`: popularised by TensorFlow
- [x] `used_for/backends`: popularised by Express
- [x] `used_for/cross_platform_development`: popularised by PhoneGap/Cordova, Ionic, React-Native, Electron and more
- [ ] `used_for/embedded_systems`: It's possible to run the transpiled JavaScript on microcontrollers and IoT platforms, but the low-end nature makes it not a viable, professional, solution. Therefore this is not included.
- [ ] `used_for/financial_systems`: Although it improves in the type safeness department, Typescript being still Javascript makes it too slow for fintech.
- [x] `used_for/frontends`: Most Typescript usage is with Frontend frameworks.
- [x] `used_for/games`: probably one of the most popular replacements for browser-based games.
- [x] `used_for/guis`: same reason as frontends, which is more and more interesting as libraries such as React can now also render to less common/expected displays, such as terminals (and thus be used to build GUIs), not requiring CSS or other ways to provide styling.
- [x] `used_for/mobile`: yep, see platform
- [ ] `used_for/robotics`: it's possible. Things like Johnny-Five help a lot. However, it's not a _go to_ language to provide robotics programming, so it's not included.
- [ ] `used_for/scientific_calculations`: possible, and not uncommon especially for _visualisation_ (for example d3), but not a _go to_ language to do scientific calculations, so it's not included.
- [ ] `used_for/scripts`: You could still transpile your Typescript files, but is usually not worth the hassle, so is not used for scripting at all compared to Javascript
- [x] `used_for/web_development`: yes
