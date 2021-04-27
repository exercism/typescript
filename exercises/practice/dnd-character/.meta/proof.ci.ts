export class DnDCharacter {
  private hitpoints: number

  private str: number
  private dex: number
  private con: number
  private int: number
  private wis: number
  private cha: number

  constructor() {
    this.str = DnDCharacter.generateAbilityScore()
    this.dex = DnDCharacter.generateAbilityScore()
    this.con = DnDCharacter.generateAbilityScore()
    this.int = DnDCharacter.generateAbilityScore()
    this.wis = DnDCharacter.generateAbilityScore()
    this.cha = DnDCharacter.generateAbilityScore()

    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.getConstitution())
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

  public getHitpoints(): number {
    return this.hitpoints
  }

  public getStrength(): number {
    return this.str
  }

  public getDexterity(): number {
    return this.dex
  }

  public getConstitution(): number {
    return this.con
  }

  public getIntelligence(): number {
    return this.int
  }

  public getWisdom(): number {
    return this.wis
  }

  public getCharisma(): number {
    return this.cha
  }

  private static rollDice(quantity: number): number[] {
    return new Array<number>(quantity).fill(0).map(() => this.rollDie())
  }

  private static rollDie(): number {
    return Math.floor(Math.random() * 6) + 1
  }
}
