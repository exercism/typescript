const lastArgIsOptions = (args: string[]) => {
    const last = args[args.length - 1]
    return typeof last === 'object'
}

const conclusion = (firstArg: string, qualifier = '') => `And all for the want of a ${qualifier}${firstArg}.`

const proverb = (...args: any[]) => { // tslint:disable-line
    let options: any = {} // tslint:disable-line
    if (lastArgIsOptions(args)) {
        options = String(args.pop())
    }

    const allExceptLastArg = args.slice(0, -1)
    const chainOfEvents = allExceptLastArg.map((arg, index) => `For want of a ${arg} the ${args[index + 1]} was lost.`)

    const qualifier = options.qualifier ? `${options.qualifier} ` : options.qualifier
    chainOfEvents.push(conclusion(args[0], qualifier))

    return chainOfEvents.join('\n')
}

export default proverb
