export default class GradeSchool {
    private roster = new Map<number, Set<string>>()

     addStudent( name: string, grade: number) {
        const students = this.roster.get(grade) || new Set<string>()
        students.add(name)
        this.roster.set(grade, students)
    }

     studentsInGrade( grade: number): string[] {
       const toReturn =  this.roster.get(grade) || new Set<string>()
         return Array.from(toReturn).sort()
    }

     studentRoster(): Map<string, string []>  {
         const temp =  new Map<string, string[]>()
         const keys: number[] = []

         for ( const key of this.roster.keys() ) {
             keys.push(key)
         }
         keys.sort()

         for ( const each of keys) {
            const values = this.roster.get(each) || new Set<string>()
            temp.set(each.toString(10), Array.from(values).sort())
         }

         return temp
    }
}
