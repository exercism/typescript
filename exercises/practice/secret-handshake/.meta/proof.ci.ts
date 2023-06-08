const COMMANDS = ['wink', 'double blink', 'close your eyes', 'jump'] as const
type Command = (typeof COMMANDS)[number]
type Commands = Command[]

export const commands = (handshake: number): Commands => {
  const shakeWith = COMMANDS.filter((_, i) => handshake & Math.pow(2, i))

  if (handshake & Math.pow(2, 4)) {
    shakeWith.reverse()
  }

  return shakeWith
}
