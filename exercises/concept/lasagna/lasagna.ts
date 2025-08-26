// 👋🏽 Hi there!
//
// On the TypeScript track we provide you with stubs. These stubs provide a
// starting point to solving the exercise.
//
// In general, each variable/constant and each declared function will have a
// JSDoc comment block above it, explaining what the variable/constant holds or
// the function is supposed to accomplish.
//
// 💡 Often, the JSDoc comment blocks have annotations, such as @param and
// @returns which are usually highlighted with a different color if the IDE
// you're in recognizes them. It's these annotations that are used when
// referring to the constant, variable, or function from somewhere else that
// IDEs display.
//
// You don't need to write these yourself; it is not expected in idiomatic
// TypeScript, but some companies and style-guides do enforce them.
//
// 💡 You're allowed to completely clear a stub before you get started. Often
// we recommend using the stub, because they are already set-up correctly to
// work with the tests, which you can find in ./lasagna.spec.js
//
// Good luck preparing some lasagna!

/**
 * The number of minutes it takes to prepare a single layer.
 */
const PREPARATION_MINUTES_PER_LAYER = 2

/**
 * Determines the number of minutes the lasagna still needs to remain in the
 * oven to be properly prepared.
 *
 * @param actualMinutesInOven
 * @returns the number of minutes remaining
 */
export function remainingMinutesInOven(actualMinutesInOven: number): number {
  throw new Error('Remove this line and implement the function')
}

/**
 * Given a number of layers, determines the total preparation time.
 *
 * @param numberOfLayers
 * @returns the total preparation time
 */
export function preparationTimeInMinutes(numberOfLayers: number): number {
  throw new Error('Remove this line and implement the function')
}

/**
 * Calculates the total working time. That is, the time to prepare all the
 * layers of lasagna, and the time already spent in the oven.
 *
 * @param numberOfLayers
 * @param actualMinutesInOven
 * @returns the total working time
 */
export function totalTimeInMinutes(
  numberOfLayers: number,
  actualMinutesInOven: number
): number {
  throw new Error('Remove this line and implement the function')
}
