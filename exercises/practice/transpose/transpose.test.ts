import { transpose } from './transpose'

describe('Transpose', () => {
  it('empty string', () => {
    const expected: string[] = []
    expect(transpose([])).toEqual(expected)
  })

  xit('two characters in a row', () => {
    const expected = ['A', '1']
    expect(transpose(['A1'])).toEqual(expected)
  })

  xit('two characters in a column', () => {
    const expected = ['A1']
    expect(transpose(['A', '1'])).toEqual(expected)
  })

  xit('simple', () => {
    const expected = ['A1', 'B2', 'C3']
    expect(transpose(['ABC', '123'])).toEqual(expected)
  })

  xit('single line', () => {
    const expected = [
      'S',
      'i',
      'n',
      'g',
      'l',
      'e',
      ' ',
      'l',
      'i',
      'n',
      'e',
      '.',
    ]
    expect(transpose(['Single line.'])).toEqual(expected)
  })

  xit('first line longer than second line', () => {
    const expected = [
      'TT',
      'hh',
      'ee',
      '  ',
      'ff',
      'oi',
      'uf',
      'rt',
      'th',
      'h ',
      ' l',
      'li',
      'in',
      'ne',
      'e.',
      '.',
    ]
    expect(transpose(['The fourth line.', 'The fifth line.'])).toEqual(expected)
  })

  xit('second line longer than first line', () => {
    const expected = [
      'TT',
      'hh',
      'ee',
      '  ',
      'fs',
      'ie',
      'rc',
      'so',
      'tn',
      ' d',
      'l ',
      'il',
      'ni',
      'en',
      '.e',
      ' .',
    ]
    expect(transpose(['The first line.', 'The second line.'])).toEqual(expected)
  })

  xit('square', () => {
    const expected = ['HEART', 'EMBER', 'ABUSE', 'RESIN', 'TREND']
    expect(transpose(['HEART', 'EMBER', 'ABUSE', 'RESIN', 'TREND'])).toEqual(
      expected
    )
  })

  xit('rectangle', () => {
    const expected = [
      'FOBS',
      'RULE',
      'ATOP',
      'CLOT',
      'TIME',
      'UNIT',
      'RENT',
      'EDGE',
    ]
    expect(transpose(['FRACTURE', 'OUTLINED', 'BLOOMING', 'SEPTETTE'])).toEqual(
      expected
    )
  })

  xit('triangle', () => {
    const expected = [
      'TEASER',
      ' EASER',
      '  ASER',
      '   SER',
      '    ER',
      '     R',
    ]
    expect(transpose(['T', 'EE', 'AAA', 'SSSS', 'EEEEE', 'RRRRRR'])).toEqual(
      expected
    )
  })

  xit('jagged triangle', () => {
    const expected = ['123456', '1 3456', '  3456', '  3 56', '    56', '    5']

    expect(transpose(['11', '2', '3333', '444', '555555', '66666'])).toEqual(
      expected
    )
  })

  xit('test many lines', () => {
    const expected = [
      'CIFWFAWDTAWITW',
      'hnrhr hohnhshh',
      'o oeopotedi ea',
      'rfmrmash  cn t',
      '.a e ie fthow ',
      ' ia fr weh,whh',
      'Trnco miae  ie',
      'w ciroitr btcr',
      'oVivtfshfcuhhe',
      ' eeih a uote  ',
      'hrnl sdtln  is',
      'oot ttvh tttfh',
      'un bhaeepihw a',
      'saglernianeoyl',
      'e,ro -trsui ol',
      'h uofcu sarhu ',
      'owddarrdan o m',
      "lhg to'egccuwi",
      'deemasdaeehris',
      'sr als t  ists',
      ",ebk 'phool'h,",
      '  reldi ffd   ',
      'bweso tb  rtpo',
      'oea ileutterau',
      't kcnoorhhnatr',
      "hl isvuyee'fi ",
      ' atv es iisfet',
      'ayoior trr ino',
      'l  lfsoh  ecti',
      'ion   vedpn  l',
      'kuehtteieadoe ',
      'erwaharrar,fas',
      '   nekt te  rh',
      'ismdsehphnnosa',
      'ncuse ra-tau l',
      ' et  tormsural',
      "dniuthwea'g t ",
      'iennwesnr hsts',
      'g,ycoi tkrttet',
      "n ,l r s'a anr",
      "i  ef  'dgcgdi",
      't  aol   eoe,v',
      'y  nei sl,u; e',
      ',  .sf to l   ',
      '     e rv d  t',
      '     ; ie    o',
      '       f, r   ',
      '       e  e  m',
      '       .  m  e',
      '          o  n',
      '          v  d',
      '          e  .',
      '          ,',
    ]
    expect(
      transpose([
        'Chor. Two households, both alike in dignity,',
        'In fair Verona, where we lay our scene,',
        'From ancient grudge break to new mutiny,',
        'Where civil blood makes civil hands unclean.',
        'From forth the fatal loins of these two foes',
        "A pair of star-cross'd lovers take their life;",
        "Whose misadventur'd piteous overthrows",
        "Doth with their death bury their parents' strife.",
        "The fearful passage of their death-mark'd love,",
        "And the continuance of their parents' rage,",
        "Which, but their children's end, naught could remove,",
        "Is now the two hours' traffic of our stage;",
        'The which if you with patient ears attend,',
        'What here shall miss, our toil shall strive to mend.',
      ])
    ).toEqual(expected)
  })
})
