export function isLeapYear(year: number): boolean {
  return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0
}
