export default class Octal {
  static octal(num: string) {
    num = num.match(/[^0-7]/) ? num = '0' : num;
    return {
      toDecimal: () => num.split('').reduce((prev: number, curr: string) => prev * 8 + parseInt(curr), 0),
    };
  }
}