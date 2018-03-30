const defaultChildren = [
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

interface Plants {
    [code: string]: string
}

const plants: Plants = {
    G: "grass",
    V: "violets",
    R: "radishes",
    C: "clover"
}

interface Pots {
    upper: string[]
    lower: string[]
}

const converToPots = (pots: string[][]): Pots => {
    return {
        upper: pots[0],
        lower: pots[1]
    }
}

const getPlants = (pots: Pots, index: number): string[] => {
    const plants = []
    const position = 2 * index
    plants.push(pots.upper[position])
    plants.push(pots.upper[position + 1])
    plants.push(pots.lower[position])
    plants.push(pots.lower[position + 1])
    return plants
}

const parse = (diagram: string): string[][] => {
    return diagram.split('\n').map((row) => [...row].map((sign) => plants[sign]))
}

export default class Garden {
    [student: string]: string[]

    constructor(diagrams: string, students?: string[]) {
        this.students = students || defaultChildren
        this.students.sort()

        this.students.forEach((student, index) => {
            this[student.toLocaleLowerCase()] = getPlants(converToPots(parse(diagrams)), index)
        })
    }
}
