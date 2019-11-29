

type colors = 'black'
|'brown'
|'red'
|'orange'
|'yellow'
|'green'
|'blue'
|'violet'
|'grey'
|'white'

const COLORS = [
  'black', 'brown', 'red', 'orange', 'yellow', 'green',
  'blue', 'violet', 'grey', 'white',
]

export const value = ([tens, ones, ..._]: colors[]): number => 
  COLORS.indexOf(tens) *10 + COLORS.indexOf(ones)


