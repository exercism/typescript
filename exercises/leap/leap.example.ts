
function isLeapYear(year: number) {
    return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0
}

export default isLeapYear