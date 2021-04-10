import { sayInEnglish } from './say'

describe('say', () => {
  it('zero', () => {
    expect(sayInEnglish(0)).toBe('zero')
  })

  xit('one', () => {
    expect(sayInEnglish(1)).toBe('one')
  })

  xit('fourteen', () => {
    expect(sayInEnglish(14)).toBe('fourteen')
  })

  xit('twenty', () => {
    expect(sayInEnglish(20)).toBe('twenty')
  })

  xit('twenty-two', () => {
    expect(sayInEnglish(22)).toBe('twenty-two')
  })

  xit('one hundred', () => {
    expect(sayInEnglish(100)).toBe('one hundred')
  })

  xit('one hundred twenty-three', () => {
    expect(sayInEnglish(123)).toBe('one hundred twenty-three')
  })

  xit('one thousand', () => {
    expect(sayInEnglish(1000)).toBe('one thousand')
  })

  xit('one thousand two hundred thirty-four', () => {
    expect(sayInEnglish(1234)).toBe('one thousand two hundred thirty-four')
  })

  xit('one million', () => {
    expect(sayInEnglish(1000000)).toBe('one million')
  })

  xit('one million two', () => {
    expect(sayInEnglish(1000002)).toBe('one million two')
  })

  xit('one million two thousand three hundred forty-five', () => {
    expect(sayInEnglish(1002345)).toBe(
      'one million two thousand three hundred forty-five'
    )
  })

  xit('one billion', () => {
    expect(sayInEnglish(1000000000)).toBe('one billion')
  })

  xit('a really big number', () => {
    let expected = 'nine hundred eighty-seven billion '
    expected += 'six hundred fifty-four million '
    expected += 'three hundred twenty-one thousand '
    expected += 'one hundred twenty-three'
    expect(sayInEnglish(987654321123)).toBe(expected)
  })

  xit('raises an error below zero', () => {
    expect(() => {
      sayInEnglish(-1)
    }).toThrowError('Number must be between 0 and 999,999,999,999.')
  })

  xit('raises an error above 999,999,999,999', () => {
    expect(() => {
      sayInEnglish(1000000000000)
    }).toThrowError('Number must be between 0 and 999,999,999,999.')
  })
})
