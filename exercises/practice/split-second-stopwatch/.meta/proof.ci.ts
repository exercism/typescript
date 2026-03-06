export type State = 'ready' | 'running' | 'stopped'

export class SplitSecondStopwatch {
  private _state: State = 'ready'
  private totalSeconds = 0
  private currentLapSeconds = 0
  private previousLapSeconds: number[] = []

  public get state(): State {
    return this._state
  }

  public get currentLap(): string {
    return this.formatTime(this.currentLapSeconds)
  }

  public get total(): string {
    return this.formatTime(this.totalSeconds)
  }

  public get previousLaps(): string[] {
    return this.previousLapSeconds.map((s) => this.formatTime(s))
  }

  public start(): void {
    if (this._state === 'running') {
      throw new Error('cannot start an already running stopwatch')
    }
    this._state = 'running'
  }

  public stop(): void {
    if (this._state !== 'running') {
      throw new Error('cannot stop a stopwatch that is not running')
    }
    this._state = 'stopped'
  }

  public lap(): void {
    if (this._state !== 'running') {
      throw new Error('cannot lap a stopwatch that is not running')
    }
    this.previousLapSeconds.push(this.currentLapSeconds)
    this.currentLapSeconds = 0
  }

  public reset(): void {
    if (this._state !== 'stopped') {
      throw new Error('cannot reset a stopwatch that is not stopped')
    }
    this._state = 'ready'
    this.totalSeconds = 0
    this.currentLapSeconds = 0
    this.previousLapSeconds = []
  }

  public advanceTime(duration: string): void {
    if (this._state === 'running') {
      const seconds = this.toSeconds(duration)
      this.currentLapSeconds += seconds
      this.totalSeconds += seconds
    }
  }

  private toSeconds(duration: string): number {
    const [h, m, s] = duration.split(':').map(Number)
    return h * 3600 + m * 60 + s
  }

  private formatTime(seconds: number): string {
    const h = Math.floor(seconds / 3600)
    const m = Math.floor((seconds % 3600) / 60)
    const s = seconds % 60

    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
  }
}
