export default class SpaceAge {
  public readonly seconds: number = 0

  constructor(input: number) {
    this.seconds = input
  }

  private rounder(planetNumber: number): number {
    return Math.round((this.seconds / planetNumber) * 100) / 100
  }

  public onMercury(): number {
    return this.rounder(7600530.24)
  }
  public onVenus(): number {
    return this.rounder(19413907.2)
  }
  public onEarth(): number {
    return this.rounder(31558149.76)
  }
  public onMars(): number {
    return this.rounder(59354294.4)
  }
  public onJupiter(): number {
    return this.rounder(374335776.0)
  }
  public onSaturn(): number {
    return this.rounder(929596608.0)
  }
  public onUranus(): number {
    return this.rounder(2661041808.0)
  }
  public onNeptune(): number {
    return this.rounder(5200418592.0)
  }
}
