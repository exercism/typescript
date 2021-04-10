import { convert } from './ocr-numbers'

describe('ocr', () => {
  it('recognizes zero', () => {
    expect(convert(' _ \n' + '| |\n' + '|_|\n' + '   ')).toBe('0')
  })

  xit('recognizes one', () => {
    expect(convert('   \n' + '  |\n' + '  |\n' + '   ')).toBe('1')
  })

  xit('recognizes two', () => {
    expect(convert(' _ \n' + ' _|\n' + '|_ \n' + '   ')).toBe('2')
  })

  xit('recognizes three', () => {
    expect(convert(' _ \n' + ' _|\n' + ' _|\n' + '   ')).toBe('3')
  })

  xit('recognizes four', () => {
    expect(convert('   \n' + '|_|\n' + '  |\n' + '   ')).toBe('4')
  })

  xit('recognizes five', () => {
    expect(convert(' _ \n' + '|_ \n' + ' _|\n' + '   ')).toBe('5')
  })

  xit('recognizes six', () => {
    expect(convert(' _ \n' + '|_ \n' + '|_|\n' + '   ')).toBe('6')
  })

  xit('recognizes seven', () => {
    expect(convert(' _ \n' + '  |\n' + '  |\n' + '   ')).toBe('7')
  })

  xit('recognizes eight', () => {
    expect(convert(' _ \n' + '|_|\n' + '|_|\n' + '   ')).toBe('8')
  })

  xit('recognizes nine', () => {
    expect(convert(' _ \n' + '|_|\n' + ' _|\n' + '   ')).toBe('9')
  })

  xit('recognizes ten', () => {
    expect(convert('    _ \n' + '  || |\n' + '  ||_|\n' + '      ')).toBe('10')
  })

  xit('identifies garble', () => {
    expect(convert('   \n' + '| |\n' + '| |\n' + '   ')).toBe('?')
  })

  xit('converts 110101100', () => {
    expect(
      convert(
        '       _     _        _  _ \n' +
          '  |  || |  || |  |  || || |\n' +
          '  |  ||_|  ||_|  |  ||_||_|\n' +
          '                           '
      )
    ).toBe('110101100')
  })

  xit('identifies garble mixed in', () => {
    expect(
      convert(
        '       _     _           _ \n' +
          '  |  || |  || |     || || |\n' +
          '  |  | _|  ||_|  |  ||_||_|\n' +
          '                           '
      )
    ).toBe('11?10?1?0')
  })

  xit('converts 1234567890', () => {
    expect(
      convert(
        '    _  _     _  _  _  _  _  _ \n' +
          '  | _| _||_||_ |_   ||_||_|| |\n' +
          '  ||_  _|  | _||_|  ||_| _||_|\n' +
          '                              '
      )
    ).toBe('1234567890')
  })

  xit('converts 123 456 789', () => {
    expect(
      convert(
        '    _  _ \n' +
          '  | _| _|\n' +
          '  ||_  _|\n' +
          '         \n' +
          '    _  _ \n' +
          '|_||_ |_ \n' +
          '  | _||_|\n' +
          '         \n' +
          ' _  _  _ \n' +
          '  ||_||_|\n' +
          '  ||_| _|\n' +
          '         '
      )
    ).toBe('123,456,789')
  })
})
