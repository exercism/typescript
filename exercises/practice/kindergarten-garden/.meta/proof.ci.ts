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

function getPlants(pots: Pots, index: number): Plants {
  const plants: Plants = []

  const position = 2 * index
  plants.push(pots[0][position])
  plants.push(pots[0][position + 1])
  plants.push(pots[1][position])
  plants.push(pots[1][position + 1])

  return plants
}

function parse(diagram: string): Pots {
  return diagram
    .split('\n')
    .map((row) =>
      [...row].map(
        (sign) => PLANT_CODES[sign as keyof typeof PLANT_CODES] as Plant
      )
    )
}
export class Garden {
  private plots: Record<Student, Plants>

  constructor(
    diagram: string,
    private students = DEFAULT_STUDENTS
  ) {
    this.students.sort()

    this.plots = {}

    this.students.forEach((student, index) => {
      this.plots[student] = getPlants(parse(diagram), index)
    })
  }

  public plants(student: Student): Plants {
    return this.plots[student]
  }
}
