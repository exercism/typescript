function isYelling(message: string): boolean {
  return message.toUpperCase() === message && message.toLowerCase() !== message
}

function isQuestion(message: string): boolean {
  return message.trim().slice(-1) === '?'
}

function isSilence(message: string): boolean {
  return message.trim().length === 0
}

export function hey(message: string): string {
  if (isYelling(message) && isQuestion(message)) {
    return "Calm down, I know what I'm doing!"
  }

  if (isYelling(message)) {
    return 'Whoa, chill out!'
  }

  if (isQuestion(message)) {
    return 'Sure.'
  }

  if (isSilence(message)) {
    return 'Fine. Be that way!'
  }

  return 'Whatever.'
}
