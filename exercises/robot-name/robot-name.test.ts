import RobotName from './robot-name'

describe('Robot', () => {
  let robot: RobotName

  beforeEach(() => {
    robot = new RobotName()
  })

  it('has a name', () => {
    expect(robot.name).toMatch(/^[A-Z]{2}\d{3}$/)
  })

  it('name is the same each time', () => {
    expect(robot.name).toEqual(robot.name)
  })

  it('different robots have different names', () => {
    const differentRobot = new RobotName()
    expect(differentRobot.name).not.toEqual(robot.name)
  })

  it('is able to reset the name', () => {
    const originalName = robot.name

    robot.resetName()
    const newName = robot.name

    expect(newName).toMatch(/^[A-Z]{2}\d{3}$/)
    expect(originalName).not.toEqual(newName)
  })

  it('should set a unique name after reset', () => {
    const NUMBER_OF_ROBOTS = 10000
    const usedNames = new Set()

    usedNames.add(robot.name)
    for (let i = 0; i < NUMBER_OF_ROBOTS; i++) {
      robot.resetName()
      usedNames.add(robot.name)
    }

    expect(usedNames.size).toEqual(NUMBER_OF_ROBOTS + 1)
  })

  it('internal name cannot be modified', () => {
    const modifyInternal = () => robot.name += "a modification"
    expect(modifyInternal).toThrow()
  })

  it('new names should not be sequential', () => {
    const name1 = robot.name
    const name2 = (new RobotName()).name
    const name3 = (new RobotName()).name
    expect(areSequential(name1, name1)).toBe(true)
    expect(areSequential(name1, name2)).toBe(false)
    expect(areSequential(name2, name3)).toBe(false)
  })

  it('names from reset should not be sequential', () => {
    const name1 = robot.name
    robot.resetName()
    const name2 = robot.name
    robot.resetName()
    const name3 = robot.name
    expect(areSequential(name1, name2)).toBe(false)
    expect(areSequential(name2, name3)).toBe(false)
    expect(areSequential(name3, name3)).toBe(true)
  })

})

const areSequential = (name1: string, name2: string) => {
  const alpha1 = name1.substr(0, 2)
  const alpha2 = name2.substr(0, 2)
  const num1 = +name1.substr(2, 3)
  const num2 = +name2.substr(2, 3)

  const numDiff = num2 - num1
  const alphaDiff = (alpha2.charCodeAt(0) - alpha1.charCodeAt(0)) * 26
    + (alpha2.charCodeAt(1) - alpha1.charCodeAt(1))

  const totalDiff = alphaDiff * 1000 + numDiff

  return Math.abs(totalDiff) <= 1
}
