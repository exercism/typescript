class FlattenArray {
  public static flatten<A, T extends Array<A | A[]>>(arr: T): A[] {
    return arr
      .reduce(
        (acc: A[], el) =>
          Array.isArray(el) ? acc.concat(this.flatten(el)) : acc.concat(el),
        []
      )
      .filter((el: A) => el !== null && el !== undefined)
  }
}

export default FlattenArray
