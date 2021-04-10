export function accumulate<T, O>(list: T[], accumulator: (arg: T) => O): O[] {
  const out = []
  let idx = -1
  const end = list.length

  while (++idx < end) {
    out.push(accumulator(list[idx]))
  }

  return out
}
