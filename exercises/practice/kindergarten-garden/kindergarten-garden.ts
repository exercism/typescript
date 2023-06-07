//
// This is only a SKELETON file for the 'Kindergarten Garden' exercise.
// It's been provided as a convenience to get you started writing code faster.
//

const DEFAULT_STUDENTS: Student[] = [
  'Alice',
  'Bob',
  'Charlie',
  'David',
  'Eve',
  'Fred',
  'Ginny',
  'Harriet',
  'Ileana',
  'Joseph',
  'Kincaid',
  'Larry',
]

const PLANT_CODES = {
  G: 'grass',
  V: 'violets',
  R: 'radishes',
  C: 'clover',
} as const

type Student = string
type Plant = (typeof PLANT_CODES)[keyof typeof PLANT_CODES]
type Plants = Plant[]
type Pots = Plants[]

export class Garden {
  constructor(diagram: string, students = DEFAULT_STUDENTS) {
    throw new Error('Remove this statement and implement this function')
  }

  public plants(student: Student): Plants {
    throw new Error('Remove this statement and implement this function')
  }
}
