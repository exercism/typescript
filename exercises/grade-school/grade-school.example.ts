type Student = string
type Grade = number
type StudentRooster = Map<string, Student[]>
type StudentGrades = Map<Student, Grade>

class GradeSchool {
  private studentGrades: StudentGrades

  constructor() {
    this.studentGrades = new Map()
  }

  private studentGradeEntries(): Array<[Student, Grade]> {
    return Array.from(this.studentGrades.entries())
  }

  public studentRoster(): StudentRooster {
    const grades: Grade[] = Array.from(
      new Set(this.studentGrades.values()).values()
    ).sort()

    const emptyStudentsRooster: StudentRooster = new Map()

    const gradesReducer = (
      rooster: StudentRooster,
      grade: Grade
    ): StudentRooster =>
      rooster.set(grade.toString(), this.studentsInGrade(grade))

    return grades.reduce(gradesReducer, emptyStudentsRooster)
  }

  public addStudent(s: Student, g: Grade): void {
    this.studentGrades.set(s, g)
  }

  public studentsInGrade(g: Grade): Student[] {
    return this.studentGradeEntries()
      .filter(([_, sg]) => sg == g)
      .map(([s, _]) => s)
      .sort()
  }
}

export default GradeSchool
