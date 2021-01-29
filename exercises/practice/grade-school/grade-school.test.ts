import GradeSchool from './grade-school'

describe('School', () => {
  let gradeSchool: GradeSchool

  beforeEach(() => {
    gradeSchool = new GradeSchool()
  })

  it('a new school has an empty roster', () => {
    expect(gradeSchool.studentRoster().size === 0).toEqual(true)
  })

  xit("A student can't be in two different grades", () => {
    gradeSchool.addStudent('Aimee', 2)
    gradeSchool.addStudent('Aimee', 1)

    const emptyGrade = gradeSchool.studentsInGrade(2)
    expect(emptyGrade).toEqual([])
  })

  xit('adding a student adds them to the roster for the given grade', () => {
    gradeSchool.addStudent('Aimee', 2)

    const expectedDb = new Map(Object.entries({ 2: ['Aimee'] }))
    expect(gradeSchool.studentRoster()).toEqual(expectedDb)
  })

  xit('adding more students to the same grade adds them to the roster', () => {
    gradeSchool.addStudent('Blair', 2)
    gradeSchool.addStudent('James', 2)
    gradeSchool.addStudent('Paul', 2)

    const expectedDb = new Map(
      Object.entries({ 2: ['Blair', 'James', 'Paul'] })
    )
    expect(gradeSchool.studentRoster()).toEqual(expectedDb)
  })

  xit('adding students to different grades adds them to the roster', () => {
    gradeSchool.addStudent('Chelsea', 3)
    gradeSchool.addStudent('Logan', 7)

    const expectedDb = new Map(Object.entries({ 3: ['Chelsea'], 7: ['Logan'] }))
    expect(gradeSchool.studentRoster()).toEqual(expectedDb)
  })

  xit('grade returns the students in that grade in alphabetical order', () => {
    gradeSchool.addStudent('Franklin', 5)
    gradeSchool.addStudent('Bradley', 5)
    gradeSchool.addStudent('Jeff', 1)

    const expectedStudents = ['Bradley', 'Franklin']
    expect(gradeSchool.studentsInGrade(5)).toEqual(expectedStudents)
  })

  xit('grade returns an empty array if there are no students in that grade', () => {
    expect(gradeSchool.studentsInGrade(1)).toEqual([])
  })

  xit('the students names in each grade in the roster are sorted', () => {
    gradeSchool.addStudent('Jennifer', 4)
    gradeSchool.addStudent('Kareem', 6)
    gradeSchool.addStudent('Christopher', 4)
    gradeSchool.addStudent('Kyle', 3)

    const expectedSortedStudents = new Map(
      Object.entries({
        3: ['Kyle'],
        4: ['Christopher', 'Jennifer'],
        6: ['Kareem'],
      })
    )
    expect(gradeSchool.studentRoster()).toEqual(expectedSortedStudents)
  })

  xit('roster cannot be modified outside of module', () => {
    gradeSchool.addStudent('Aimee', 2)
    const roster = gradeSchool.studentRoster()
    const result = roster.get('2') || []
    result.push('Oops.')
    const expectedDb = new Map(Object.entries({ 2: ['Aimee'] }))
    expect(gradeSchool.studentRoster()).toEqual(expectedDb)
  })

  xit('roster cannot be modified outside of module using studentsInGrade()', () => {
    gradeSchool.addStudent('Aimee', 2)
    gradeSchool.studentsInGrade(2).push('Oops.')
    const expectedDb = new Map(Object.entries({ 2: ['Aimee'] }))
    expect(gradeSchool.studentRoster()).toEqual(expectedDb)
  })
})
