const conclusion = (firstArg: string): string =>
  `And all for the want of a ${firstArg}.`

const proverb = (...args: string[]): string => {

  const allExceptLastArg = args.slice(0, -1)
  const chainOfEvents = allExceptLastArg.map(
    (arg, index) => `For want of a ${arg} the ${args[index + 1]} was lost.`
  )

  chainOfEvents.push(conclusion(args[0]))

  return chainOfEvents.join("\n")
}

export default proverb
