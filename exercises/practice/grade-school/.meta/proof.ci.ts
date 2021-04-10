type Student = string
type Grade = number
type StudentRooster = Record<string, Student[]>
type StudentGrades = Map<Student, Grade>
export class GradeSchool {
  students: StudentGrades

  constructor() {
    this.students = new Map()
  }

  add(student: Student, level: Grade) {
    this.students.set(student, level)
  }

  grade(level: Grade) {
    return Array.from(this.students.entries())
      .filter(([, studentGrade]) => studentGrade === level)
      .map(([student]) => student)
      .sort()
  }

  roster(): StudentRooster {
    const result: StudentRooster = {}

    Array.from(this.students.entries()).forEach(([, studentGrade]) => {
      if (!result[studentGrade]) {
        result[studentGrade] = this.grade(studentGrade)
      }
    })

    return result
  }
}
