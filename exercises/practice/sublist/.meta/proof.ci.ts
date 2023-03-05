export class List {
  private readonly list: number[]

  constructor(...list: number[]) {
    this.list = list
  }

  public compare(other: List): 'sublist' | 'superlist' | 'unequal' | 'equal' {
    switch (this.lengthDiff(this, other)) {
      case '-1':
        return this.isSublist(other.list, this.list) ? 'sublist' : 'unequal'
      case '0':
        return this.isSublist(other.list, this.list) ? 'equal' : 'unequal'
      case '1':
        return this.isSublist(this.list, other.list) ? 'superlist' : 'unequal'
    }

    return 'unequal'
  }

  private lengthDiff(listOne: List, listTwo: List): string {
    return String(Math.sign(listOne.list.length - listTwo.list.length))
  }

  private isSublist(listOne: number[], listTwo: number[]): boolean {
    const join = (list: number[]): string => {
      const joiner = ','
      return list.join(joiner) + joiner
    }

    return Boolean(join(listOne).match(join(listTwo)))
  }
}
