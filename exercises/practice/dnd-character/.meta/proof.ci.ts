export class DnDCharacter {
  public readonly hitpoints: number

  public readonly strength: number
  public readonly dexterity: number
  public readonly constitution: number
  public readonly intelligence: number
  public readonly wisdom: number
  public readonly charisma: number

  constructor() {
    this.strength = DnDCharacter.generateAbilityScore()
    this.dexterity = DnDCharacter.generateAbilityScore()
    this.constitution = DnDCharacter.generateAbilityScore()
    this.intelligence = DnDCharacter.generateAbilityScore()
    this.wisdom = DnDCharacter.generateAbilityScore()
    this.charisma = DnDCharacter.generateAbilityScore()

    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution)
  }

  public static generateAbilityScore(): number {
    return this.rollDice(4)
      .sort()
      .slice(1, 4)
      .reduce((acu, act) => acu + act, 0)
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2)
  }

  private static rollDice(quantity: number): number[] {
    return new Array<number>(quantity).fill(0).map(() => this.rollDie())
  }

  private static rollDie(): number {
    return Math.floor(Math.random() * 6) + 1
  }
}
