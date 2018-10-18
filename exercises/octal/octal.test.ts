import Octal from './octal';

describe('octal', () => {
  test('1 is decimal 1', () => {
    expect(Octal.octal('1').toDecimal()).toEqual(1);
  });

  xtest('10 is decimal 8', () => {
    expect(Octal.octal('10').toDecimal()).toEqual(8);
  });

  xtest('17 is decimal 15', () => {
    expect(Octal.octal('17').toDecimal()).toEqual(15);
  });

  xtest('11 is decimal 9', () => {
    expect(Octal.octal('11').toDecimal()).toEqual(9);
  });

  xtest('130 is decimal 88', () => {
    expect(Octal.octal('130').toDecimal()).toEqual(88);
  });

  xtest('2047 is decimal 1063', () => {
    expect(Octal.octal('2047').toDecimal()).toEqual(1063);
  });

  xtest('7777 is decimal 4095', () => {
    expect(Octal.octal('7777').toDecimal()).toEqual(4095);
  });

  xtest('1234567 is decimal 342391', () => {
    expect(Octal.octal('1234567').toDecimal()).toEqual(342391);
  });

  xtest('invalid is decimal 0', () => {
    expect(Octal.octal('carrot').toDecimal()).toEqual(0);
  });

  xtest('considers the digit 8 as invalid', () => {
    expect(Octal.octal('12345678').toDecimal()).toEqual(0);
  });
});
