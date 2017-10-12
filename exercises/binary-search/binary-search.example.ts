export default class BinarySearch<T> {
    array: T[]

    constructor(array: T[]) {
        if (this.isSorted(array)) {
            this.array = array
        }
    }

    indexOf(val: T) {
        return this.search(val)
    }

    private isSorted(array: T[]) {
        for (let i = 1; i < array.length; i++) {
            if (array[i] < array[i - 1]) {
                return false
            }
        }
        return true
    }

    private search(val: T) {
        const arr = this.array
        let start = 0
        let end = arr.length
        while (start <= end) {
            const mid = Math.floor((start + end) / 2)
            if (arr[mid] === val) {
                return mid
            }
            if (arr[mid] > val) {
                end = mid - 1
            } else {
                start = mid + 1
            }
        }
        // val not found
        return -1
    }

}
