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

  static generateAbilityScore() : number {
    return this.rollDice(4).sort().slice(1,4).reduce((acu, act) => acu + act, 0)
  }

  static getModifierFor(abilityValue : number) : number {
    return Math.floor((abilityValue - 10) / 2)
  }

  getHitpoints() : number {
    return this.hitpoints
  }

  getStrength() : number {
    return this.str
  }

  getDexterity() : number {
    return this.dex
  }

  getConstitution() : number {
    return this.con
  }

  getIntelligence() : number {
    return this.int
  }

  getWisdom() : number {
      return this.wis
  }

  getCharisma() : number {
    return this.cha
  }

  private static rollDice(quantity: number) : number[] {

    return new Array<number>(quantity)
      .fill(0)
      .map(() => this.rollDie())
  }

  private static rollDie() {

    return Math.floor(Math.random() * (6)) + 1;
  }
}
