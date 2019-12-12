type colors =
  | "black"
  | "brown"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "violet"
  | "grey"
  | "white"

const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white"
]

export class ResistorColor {
  private tens: colors
  private ones: colors

  constructor([tens, ones, ..._]: colors[]) {
    if (tens === undefined || ones === undefined) {
      throw new Error("At least two colors need to be present")
    }
    this.tens = tens
    this.ones = ones
  }

  public value = (): number =>
    COLORS.indexOf(this.tens) * 10 + COLORS.indexOf(this.ones)
}
