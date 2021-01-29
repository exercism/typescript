/**
 * generates a random number from 0 to maximum-1
 *
 * random(5) => generates an integer 0 - 4
 *
 * @param maximum - max limit of generated number
 */
const rand = (maximum: number): number => Math.floor(Math.random() * maximum)

class NameDatabase {
  private static ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  private availableNames!: string[]

  constructor() {
    this.releaseNames()
  }

  public releaseNames(): void {
    this.availableNames = this.allPossibleNames()
  }

  public allPossibleNames(): string[] {
    const names = []
    for (const a of NameDatabase.ALPHABET) {
      for (const b of NameDatabase.ALPHABET) {
        for (let i = 0; i < 1000; i++) {
          names.push(`${a}${b}${i.toString().padStart(3, '0')}`)
        }
      }
    }
    return names
  }

  public fetchNewName(): string {
    if (this.availableNames.length === 0) throw 'no more names'

    const randomPosition = rand(this.availableNames.length)
    const name = this.availableNames[randomPosition]
    const lastName = this.availableNames.pop()!
    // swap the last name into the position of the name
    // we just removed (unless we happened to randomly
    // pick the very last name already)
    if (name !== lastName) this.availableNames[randomPosition] = lastName

    return name
  }
}

const RobotsDB = new NameDatabase()

export default class Robot {
  private _name!: string

  public get name(): string {
    return this._name
  }

  constructor() {
    this.resetName()
  }

  public resetName(): void {
    this._name = RobotsDB.fetchNewName()
  }

  public static releaseNames(): void {
    RobotsDB.releaseNames()
  }
}
