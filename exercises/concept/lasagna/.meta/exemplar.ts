/**
 * The amount of minutes the lasagna should be in the oven.
 */
export const EXPECTED_MINUTES_IN_OVEN = 40

/**
 * The amount of minutes it takes to prepare a single layer.
 */
const PREPARATION_MINUTES_PER_LAYER = 2

/**
 * Determines the amount of minutes the lasagna still needs to remain in the
 * oven to be properly prepared.
 *
 * @param actualMinutesInOven
 * @returns the number of minutes remaining
 */
export function remainingMinutesInOven(actualMinutesInOven: number): number {
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven
}

/**
 * Given a number of layers, determines the total preparation time.
 *
 * @param numberOfLayers
 * @returns the total preparation time
 */
export function preparationTimeInMinutes(numberOfLayers: number): number {
  return numberOfLayers * PREPARATION_MINUTES_PER_LAYER
}

/**
 * Calculates the total working time. That is, the time to prepare all the layers
 * of lasagna, and the time already spent in the oven.
 *
 * @param numberOfLayers
 * @param actualMinutesInOven
 * @returns the total working time
 */
export function totalTimeInMinutes(
  numberOfLayers: number,
  actualMinutesInOven: number
): number {
  return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven
}
