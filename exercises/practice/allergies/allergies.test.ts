import { Allergies } from './allergies'

describe('allergicTo', () => {
  it('no allergies means not allergic', () => {
    const allergies = new Allergies(0)

    expect(allergies.allergicTo('peanuts')).toBeFalsy()
    expect(allergies.allergicTo('cats')).toBeFalsy()
    expect(allergies.allergicTo('strawberries')).toBeFalsy()
  })

  xit('is allergic to eggs', () => {
    const allergies = new Allergies(1)

    expect(allergies.allergicTo('eggs')).toBeTruthy()
  })

  xit('allergic to eggs in addition to other stuff', () => {
    const allergies = new Allergies(5)

    expect(allergies.allergicTo('eggs')).toBeTruthy()
    expect(allergies.allergicTo('shellfish')).toBeTruthy()
    expect(allergies.allergicTo('strawberries')).toBeFalsy()
  })
})

describe('list', () => {
  xit('no allergies at all', () => {
    const allergies = new Allergies(0)
    const expected: string[] = []

    expect(allergies.list()).toEqual(expected)
  })

  xit('allergic to just eggs', () => {
    const allergies = new Allergies(1)
    const expected = ['eggs']

    expect(allergies.list()).toEqual(expected)
  })

  xit('allergic to just peanuts', () => {
    const allergies = new Allergies(2)
    const expected = ['peanuts']

    expect(allergies.list()).toEqual(expected)
  })

  xit('allergic to just strawberries', () => {
    const allergies = new Allergies(8)
    const expected = ['strawberries']

    expect(allergies.list()).toEqual(expected)
  })

  xit('allergic to eggs and peanuts', () => {
    const allergies = new Allergies(3)
    const expected = ['eggs', 'peanuts']

    expect(allergies.list()).toEqual(expected)
  })

  xit('allergic to more than eggs but not peanuts', () => {
    const allergies = new Allergies(5)
    const expected = ['eggs', 'shellfish']

    expect(allergies.list()).toEqual(expected)
  })

  xit('allergic to lots of stuff', () => {
    const allergies = new Allergies(248)
    const expected = ['strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats']

    expect(allergies.list()).toEqual(expected)
  })

  xit('allergic to everything', () => {
    const allergies = new Allergies(255)
    const expected = [
      'eggs',
      'peanuts',
      'shellfish',
      'strawberries',
      'tomatoes',
      'chocolate',
      'pollen',
      'cats',
    ]

    expect(allergies.list()).toEqual(expected)
  })

  xit('ignore non allergen score parts', () => {
    const allergies = new Allergies(509)
    const expected = [
      'eggs',
      'shellfish',
      'strawberries',
      'tomatoes',
      'chocolate',
      'pollen',
      'cats',
    ]

    expect(allergies.list()).toEqual(expected)
  })

  xit('ignore non allergen score parts, without highest valid score', () => {
    const allergies = new Allergies(257)
    const expected = ['eggs']

    expect(allergies.list()).toEqual(expected)
  })
})
