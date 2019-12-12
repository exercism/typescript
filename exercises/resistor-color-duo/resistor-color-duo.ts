export class ResistorColor {
  private colors: string[];

  constructor(colors: string[]) {
    this.colors = colors;
  }
  value = (): number => 0;
}
