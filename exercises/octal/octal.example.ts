export default class Octal {
  static toDecimal(num: string): number {
    num = num.match(/[^0-7]/) ? num = '0' : num;
    return num.split('').reduce((prev: number, curr: string) => prev * 8 + parseInt(curr), 0);
  }
}