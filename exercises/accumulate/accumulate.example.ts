export default <T, O>(list: T[], accumulator: (arg: T) => O): O[] => {
  const out = []
  let idx = -1
  const end = Array.isArray(list) ? list.length : 0

  while (++idx < end) {
    out.push(accumulator(list[idx]))
  }

  return out
}
