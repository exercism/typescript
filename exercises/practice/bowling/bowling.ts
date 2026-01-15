export class Bowling {
  private rolls: number[] = []

  public roll(pins: number): void {
    if (pins < 0) {
      throw new Error('Negative roll is invalid')
    }

    if (pins > 10) {
      throw new Error('Pin count exceeds pins on the lane')
    }

    if (this.isGameOver()) {
      throw new Error('Cannot roll after game is over')
    }

    if (this.rolls.length > 0 && !this.isNewFrame()) {
      const previousRoll = this.rolls[this.rolls.length - 1]
      if (previousRoll !== 10 && previousRoll + pins > 10) {
        throw new Error('Pin count exceeds pins on the lane')
      }
    }

    this.rolls.push(pins)
  }

  public score(): number {
    if (!this.isGameOver()) {
      throw new Error('Score cannot be taken until the end of the game')
    }

    let totalScore = 0
    let rollIndex = 0

    for (let frame = 0; frame < 10; frame++) {
      if (this.rolls[rollIndex] === 10) {
        // Strike: 10 + next two rolls bonus
        totalScore += 10 + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2]
        rollIndex += 1
      } else if (this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10) {
        // Spare: 10 + next roll bonus
        totalScore += 10 + this.rolls[rollIndex + 2]
        rollIndex += 2
      } else {
        // Open frame: sum of two rolls
        totalScore += this.rolls[rollIndex] + this.rolls[rollIndex + 1]
        rollIndex += 2
      }
    }

    return totalScore
  }

  private isNewFrame(): boolean {
    let rollIndex = 0
    let frame = 0

    while (rollIndex < this.rolls.length && frame < 9) {
      if (this.rolls[rollIndex] === 10) {
        rollIndex += 1
      } else {
        rollIndex += 2
      }
      frame++
    }

    if (frame < 9) {
      return rollIndex === this.rolls.length
    }

    // In frame 10 (frame index 9)
    const frame10Start = rollIndex
    const rollsInFrame10 = this.rolls.length - frame10Start

    if (rollsInFrame10 === 0) {
      return true
    }

    if (rollsInFrame10 === 1) {
      const firstRoll = this.rolls[frame10Start]
      // After a strike in 10th frame, second roll is new frame
      return firstRoll === 10
    }

    if (rollsInFrame10 === 2) {
      const firstRoll = this.rolls[frame10Start]
      const secondRoll = this.rolls[frame10Start + 1]

      // If first roll was a strike
      if (firstRoll === 10) {
        // Third roll is new frame only if second roll was also a strike
        return secondRoll === 10
      }

      // If first roll wasn't a strike, third roll is new frame if first two made a spare
      return firstRoll + secondRoll === 10
    }

    return false
  }

  private isGameOver(): boolean {
    let rollIndex = 0
    let frame = 0

    while (frame < 9 && rollIndex < this.rolls.length) {
      if (this.rolls[rollIndex] === 10) {
        rollIndex += 1
      } else {
        rollIndex += 2
      }
      frame++
    }

    if (frame < 9) {
      return false
    }

    // In frame 10
    const frame10Start = rollIndex
    const rollsInFrame10 = this.rolls.length - frame10Start

    if (rollsInFrame10 < 2) {
      return false
    }

    const firstRoll = this.rolls[frame10Start]
    const secondRoll = this.rolls[frame10Start + 1]

    // Strike in 10th frame needs 3 rolls
    if (firstRoll === 10) {
      return rollsInFrame10 >= 3
    }

    // Spare in 10th frame needs 3 rolls
    if (firstRoll + secondRoll === 10) {
      return rollsInFrame10 >= 3
    }

    // Open frame in 10th frame needs only 2 rolls
    return rollsInFrame10 >= 2
  }
}
