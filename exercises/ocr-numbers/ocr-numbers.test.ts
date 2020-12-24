import OcrParser from './ocr-numbers'

describe('ocr', () => {
  it('recognizes zero', () => {
    expect(OcrParser.convert(' _ \n' + '| |\n' + '|_|\n' + '   ')).toBe('0')
  })

  xit('recognizes one', () => {
    expect(OcrParser.convert('   \n' + '  |\n' + '  |\n' + '   ')).toBe('1')
  })

  xit('recognizes two', () => {
    expect(OcrParser.convert(' _ \n' + ' _|\n' + '|_ \n' + '   ')).toBe('2')
  })

  xit('recognizes three', () => {
    expect(OcrParser.convert(' _ \n' + ' _|\n' + ' _|\n' + '   ')).toBe('3')
  })

  xit('recognizes four', () => {
    expect(OcrParser.convert('   \n' + '|_|\n' + '  |\n' + '   ')).toBe('4')
  })

  xit('recognizes five', () => {
    expect(OcrParser.convert(' _ \n' + '|_ \n' + ' _|\n' + '   ')).toBe('5')
  })

  xit('recognizes six', () => {
    expect(OcrParser.convert(' _ \n' + '|_ \n' + '|_|\n' + '   ')).toBe('6')
  })

  xit('recognizes seven', () => {
    expect(OcrParser.convert(' _ \n' + '  |\n' + '  |\n' + '   ')).toBe('7')
  })

  xit('recognizes eight', () => {
    expect(OcrParser.convert(' _ \n' + '|_|\n' + '|_|\n' + '   ')).toBe('8')
  })

  xit('recognizes nine', () => {
    expect(OcrParser.convert(' _ \n' + '|_|\n' + ' _|\n' + '   ')).toBe('9')
  })

  xit('recognizes ten', () => {
    expect(
      OcrParser.convert('    _ \n' + '  || |\n' + '  ||_|\n' + '      ')
    ).toBe('10')
  })

  xit('identifies garble', () => {
    expect(OcrParser.convert('   \n' + '| |\n' + '| |\n' + '   ')).toBe('?')
  })

  xit('converts 110101100', () => {
    expect(
      OcrParser.convert(
        '       _     _        _  _ \n' +
          '  |  || |  || |  |  || || |\n' +
          '  |  ||_|  ||_|  |  ||_||_|\n' +
          '                           '
      )
    ).toBe('110101100')
  })

  xit('identifies garble mixed in', () => {
    expect(
      OcrParser.convert(
        '       _     _           _ \n' +
          '  |  || |  || |     || || |\n' +
          '  |  | _|  ||_|  |  ||_||_|\n' +
          '                           '
      )
    ).toBe('11?10?1?0')
  })

  xit('converts 1234567890', () => {
    expect(
      OcrParser.convert(
        '    _  _     _  _  _  _  _  _ \n' +
          '  | _| _||_||_ |_   ||_||_|| |\n' +
          '  ||_  _|  | _||_|  ||_| _||_|\n' +
          '                              '
      )
    ).toBe('1234567890')
  })

  xit('converts 123 456 789', () => {
    expect(
      OcrParser.convert(
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
