class List {
    list: number[]

    constructor(...list: number[]) {
        this.list = list
    }

    compare(other: List) {
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

    lengthDiff(listOne: List, listTwo: List) {
        return String(Math.sign(listOne.list.length - listTwo.list.length))
    }

    isSublist(listOne: number[], listTwo: number[]) {
        return listOne.join().match(listTwo.join())
    }
}

export default List
