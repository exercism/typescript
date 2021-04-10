type Student = string
type Grade = number
type StudentRooster = Record<string, Student[]>
type StudentGrades = Map<Student, Grade>
export class GradeSchool {
  private students: StudentGrades

  constructor() {
    this.students = new Map()
  }

  public add(student: Student, level: Grade): void {
    this.students.set(student, level)
  }

  public grade(level: Grade): Student[] {
    return Array.from(this.students.entries())
      .filter(([, studentGrade]) => studentGrade === level)
      .map(([student]) => student)
      .sort()
  }

  public roster(): StudentRooster {
    const result: StudentRooster = {}

    Array.from(this.students.entries()).forEach(([, studentGrade]) => {
      if (!result[studentGrade]) {
        result[studentGrade] = this.grade(studentGrade)
      }
    })

    return result
  }
}
