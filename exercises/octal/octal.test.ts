import Octal from './octal';

describe('octal', () => {
  it('1 is decimal 1', () => {
    expect(Octal.toDecimal('1')).toEqual(1);
  });

  xit('10 is decimal 8', () => {
    expect(Octal.toDecimal('10')).toEqual(8);
  });

  xit('17 is decimal 15', () => {
    expect(Octal.toDecimal('17')).toEqual(15);
  });

  xit('11 is decimal 9', () => {
    expect(Octal.toDecimal('11')).toEqual(9);
  });

  xit('130 is decimal 88', () => {
    expect(Octal.toDecimal('130')).toEqual(88);
  });

  xit('2047 is decimal 1063', () => {
    expect(Octal.toDecimal('2047')).toEqual(1063);
  });

  xit('7777 is decimal 4095', () => {
    expect(Octal.toDecimal('7777')).toEqual(4095);
  });

  xit('1234567 is decimal 342391', () => {
    expect(Octal.toDecimal('1234567')).toEqual(342391);
  });

  xit('invalid is decimal 0', () => {
    expect(Octal.toDecimal('carrot')).toEqual(0);
  });

  xit('considers the digit 8 as invalid', () => {
    expect(Octal.toDecimal('12345678')).toEqual(0);
  });
});
