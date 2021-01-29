export default class Triangle {
  sides: number[]

  constructor(...sides: number[]) {
    this.sides = sides
  }

  kind() {
    return ''
  }
}
