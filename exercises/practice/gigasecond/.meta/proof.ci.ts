const gigamilisecond = 10 ** 12

export class Gigasecond {
  constructor(private readonly currentDate: Readonly<Date>) {}

  public date(): Date {
    return new Date(this.currentDate.valueOf() + gigamilisecond)
  }
}
