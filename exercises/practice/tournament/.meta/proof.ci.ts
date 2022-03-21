class TeamStats {
  public won = 0
  public lost = 0
  public drawn = 0
  public played = 0

  public get points(): number {
    return this.won * 3 + this.drawn
  }

  constructor(public name: string) {}

  public getStatTableRow(): string {
    const { name, won, lost, played, drawn } = this
    const namePad = name.padEnd(31, ' ')
    const wonPad = won.toString().padStart(3 - won.toString().length, ' ')
    const lostPad = lost.toString().padStart(3 - lost.toString().length, ' ')
    const drawnPad = drawn.toString().padStart(3 - drawn.toString().length, ' ')
    const playedPad = played
      .toString()
      .padStart(3 - played.toString().length, ' ')
    const poinntsPad = this.points
      .toString()
      .padStart(3 - this.points.toString().length, ' ')
    return `${namePad}| ${playedPad} | ${wonPad} | ${drawnPad} | ${lostPad} | ${poinntsPad}`
  }
}

export class Tournament {
  private tableHeader =
    'Team                           | MP |  W |  D |  L |  P'

  private teams: { [key: string]: TeamStats } = {}

  public tally(input: string): string {
    if (!input) return this.tableHeader

    for (const line of input.split('\n')) {
      const [teamAName, teamBName, result] = line.split(';')

      if (!this.teams[teamAName]) {
        this.teams[teamAName] = new TeamStats(teamAName)
      }

      if (!this.teams[teamBName]) {
        this.teams[teamBName] = new TeamStats(teamBName)
      }

      this.applyResult(this.teams[teamAName], this.teams[teamBName], result)
    }

    return Object.keys(this.teams)
      .sort(this.sortByPointsAlphabetically)
      .reduce(
        (acc, team) => acc + this.teams[team].getStatTableRow() + '\n',
        this.tableHeader + '\n'
      )
      .trimEnd()
  }

  private sortByPointsAlphabetically = (a: string, b: string): number => {
    const teamA = this.teams[a]
    const teamB = this.teams[b]
    if (teamA.points === teamB.points) {
      return teamA.name.localeCompare(teamB.name)
    }
    return teamB.points - teamA.points
  }

  private applyResult(
    teamA: TeamStats,
    teamB: TeamStats,
    result: string
  ): void {
    if (result === 'draw') {
      teamA.drawn++
      teamB.drawn++
    }

    if (result === 'win') {
      teamA.won++
      teamB.lost++
    }

    if (result === 'loss') {
      teamA.lost++
      teamB.won++
    }

    teamA.played++
    teamB.played++
  }
}
