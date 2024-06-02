import { DnDCharacter } from './dnd-character'

describe('Ability modifier', () => {
  it('Ability modifier for score 3 is -4', () => {
    expect(DnDCharacter.getModifierFor(3)).toEqual(-4)
  })

  xit('Ability modifier for score 4 is -3', () => {
    expect(DnDCharacter.getModifierFor(4)).toEqual(-3)
  })

  xit('Ability modifier for score 5 is -3', () => {
    expect(DnDCharacter.getModifierFor(5)).toEqual(-3)
  })

  xit('Ability modifier for score 6 is -2', () => {
    expect(DnDCharacter.getModifierFor(6)).toEqual(-2)
  })

  xit('Ability modifier for score 7 is -2', () => {
    expect(DnDCharacter.getModifierFor(7)).toEqual(-2)
  })

  xit('Ability modifier for score 8 is -1', () => {
    expect(DnDCharacter.getModifierFor(8)).toEqual(-1)
  })

  xit('Ability modifier for score 9 is -1', () => {
    expect(DnDCharacter.getModifierFor(9)).toEqual(-1)
  })

  xit('Ability modifier for score 10 is 0', () => {
    expect(DnDCharacter.getModifierFor(10)).toEqual(0)
  })

  xit('Ability modifier for score 11 is 0', () => {
    expect(DnDCharacter.getModifierFor(11)).toEqual(0)
  })

  xit('Ability modifier for score 12 is 1', () => {
    expect(DnDCharacter.getModifierFor(12)).toEqual(1)
  })

  xit('Ability modifier for score 13 is 1', () => {
    expect(DnDCharacter.getModifierFor(13)).toEqual(1)
  })

  xit('Ability modifier for score 14 is 2', () => {
    expect(DnDCharacter.getModifierFor(14)).toEqual(2)
  })

  xit('Ability modifier for score 15 is 2', () => {
    expect(DnDCharacter.getModifierFor(15)).toEqual(2)
  })

  xit('Ability modifier for score 16 is 3', () => {
    expect(DnDCharacter.getModifierFor(16)).toEqual(3)
  })

  xit('Ability modifier for score 17 is 3', () => {
    expect(DnDCharacter.getModifierFor(17)).toEqual(3)
  })

  xit('Ability modifier for score 18 is 4', () => {
    expect(DnDCharacter.getModifierFor(18)).toEqual(4)
  })
})

describe('Ability generator', () => {
  xit('Random ability is within range', () => {
    const abilityScore = DnDCharacter.generateAbilityScore()
    expect(abilityScore).toBeGreaterThanOrEqual(3)
    expect(abilityScore).toBeLessThanOrEqual(18)
  })
})

describe('Character creation', () => {
  xit('Random character is valid - hitpoints', () => {
    const character = new DnDCharacter()

    expect(character.hitpoints).toEqual(
      10 + DnDCharacter.getModifierFor(character.constitution)
    )
  })

  xit('Random character is valid - strength', () => {
    const character = new DnDCharacter()

    expect(character.strength).toBeGreaterThanOrEqual(3)
    expect(character.strength).toBeLessThanOrEqual(18)
  })

  xit('Random character is valid - dexterity', () => {
    const character = new DnDCharacter()

    expect(character.dexterity).toBeGreaterThanOrEqual(3)
    expect(character.dexterity).toBeLessThanOrEqual(18)
  })

  xit('Random character is valid - constitution', () => {
    const character = new DnDCharacter()

    expect(character.constitution).toBeGreaterThanOrEqual(3)
    expect(character.constitution).toBeLessThanOrEqual(18)
  })

  xit('Random character is valid - intelligence', () => {
    const character = new DnDCharacter()

    expect(character.intelligence).toBeGreaterThanOrEqual(3)
    expect(character.intelligence).toBeLessThanOrEqual(18)
  })

  xit('Random character is valid - wisdom', () => {
    const character = new DnDCharacter()

    expect(character.wisdom).toBeGreaterThanOrEqual(3)
    expect(character.wisdom).toBeLessThanOrEqual(18)
  })

  xit('Random character is valid - charisma', () => {
    const character = new DnDCharacter()

    expect(character.charisma).toBeGreaterThanOrEqual(3)
    expect(character.charisma).toBeLessThanOrEqual(18)
  })

  xit('Each ability is only calculated once', () => {
    const character = new DnDCharacter()

    expect(character.strength === character.strength).toBeTruthy()
  })
})
