// resistor-color solution START
const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
]

const colorCode = (color: string) => COLORS.indexOf(color)
// resistor-color solution END

export const decodedValue = ([tens, ones]: string[]) =>
  colorCode(tens) * 10 + colorCode(ones)
