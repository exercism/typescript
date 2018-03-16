class FlattenArray {
    // tslint:disable-next-line: no-any
    static flatten(arr: any[]): number[] {
        return arr
            .reduce((acc, el) =>
                Array.isArray(el)
                    ? acc.concat(this.flatten(el))
                    : acc.concat(el),
                [])
            .filter((el: number) => el !== null && el !== undefined)
    }
}

export default FlattenArray
