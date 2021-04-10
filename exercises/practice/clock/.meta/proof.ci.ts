export class Clock {
  private hour!: number
  private minute!: number

  constructor(hour: number, minute: number = 0) {
    this.reset()
    const totalMinutes = hour * 60 + minute
    this.adjustTime(totalMinutes)
  }

  private reset(): void {
    this.hour = 0
    this.minute = 0
  }

  public getHour(): number {
    return this.hour
  }

  public getMinute(): number {
    return this.minute
  }

  public toString(): string {
    return `${this.formatNumber(this.hour)}:${this.formatNumber(this.minute)}`
  }

  private formatNumber(numberToFormat: number): string {
    const numberString = numberToFormat.toString()
    return numberString.length === 1 ? `0${numberString}` : numberString
  }

  public plus(minutes: number): Clock {
    this.adjustTime(minutes)
    return this
  }

  public minus(minutes: number): Clock {
    this.adjustTime(-1 * minutes)
    return this
  }

  public equals(clock: Clock): boolean {
    return this.hour === clock.getHour() && this.minute === clock.getMinute()
  }

  private adjustTime(delta: number): void {
    const minutesPerDay = 1440
    const minutesPerHour = 60
    const hoursPerDay = 24

    delta = Math.abs(delta) >= minutesPerDay ? delta % minutesPerDay : delta

    const currentMinutes = this.hour * minutesPerHour + this.minute
    let newMinutes = (currentMinutes + delta) % minutesPerDay

    newMinutes = newMinutes < 0 ? (newMinutes += minutesPerDay) : newMinutes

    this.hour = Math.floor(newMinutes / minutesPerHour) % hoursPerDay
    this.minute = newMinutes - this.hour * minutesPerHour
  }
}
