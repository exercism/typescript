import Say from './say'

describe('say', () => {
  const say = new Say()
  it('zero', () => {
    expect(say.inEnglish(0)).toBe('zero')
  })

  it('one', () => {
    expect(say.inEnglish(1)).toBe('one')
  })

  it('fourteen', () => {
    expect(say.inEnglish(14)).toBe('fourteen')
  })

  it('twenty', () => {
    expect(say.inEnglish(20)).toBe('twenty')
  })

  it('twenty-two', () => {
    expect(say.inEnglish(22)).toBe('twenty-two')
  })

  it('one hundred', () => {
    expect(say.inEnglish(100)).toBe('one hundred')
  })

  it('one hundred twenty-three', () => {
    expect(say.inEnglish(123)).toBe('one hundred twenty-three')
  })

  it('one thousand', () => {
    expect(say.inEnglish(1000)).toBe('one thousand')
  })

  it('one thousand two hundred thirty-four', () => {
    expect(say.inEnglish(1234)).toBe('one thousand two hundred thirty-four')
  })

  it('one million', () => {
    expect(say.inEnglish(1000000)).toBe('one million')
  })

  it('one million two', () => {
    expect(say.inEnglish(1000002)).toBe('one million two')
  })

  it('one million two thousand three hundred forty-five', () => {
    expect(say.inEnglish(1002345))
      .toBe('one million two thousand three hundred forty-five')
  })

  it('one billion', () => {
    expect(say.inEnglish(1000000000)).toBe('one billion')
  })

  it('a really big number', () => {
    let expected = 'nine hundred eighty-seven billion '
    expected += 'six hundred fifty-four million '
    expected += 'three hundred twenty-one thousand '
    expected += 'one hundred twenty-three'
    expect(say.inEnglish(987654321123)).toBe(expected)
  })

  it('raises an error below zero', () => {
    expect(() => {
      say.inEnglish(-1)
    }).toThrowError('Number must be between 0 and 999,999,999,999.')
  })

  it('raises an error above 999,999,999,999', () => {
    expect(() => {
      say.inEnglish(1000000000000)
    }).toThrowError('Number must be between 0 and 999,999,999,999.')
  })

})
