import { Triangle } from './triangle'

describe('Triangle', () => {
  describe('equilateral triangle', () => {
    it('all sides are equal', () => {
      const triangle = new Triangle(2, 2, 2)
      expect(triangle.isEquilateral).toBe(true)
    })

    xit('any side is unequal', () => {
      const triangle = new Triangle(2, 3, 2)
      expect(triangle.isEquilateral).toBe(false)
    })

    xit('no sides are equal', () => {
      const triangle = new Triangle(5, 4, 6)
      expect(triangle.isEquilateral).toBe(false)
    })

    xit('all zero sides is not a triangle', () => {
      const triangle = new Triangle(0, 0, 0)
      expect(triangle.isEquilateral).toBe(false)
    })

    xit('sides may be floats', () => {
      const triangle = new Triangle(0.5, 0.5, 0.5)
      expect(triangle.isEquilateral).toBe(true)
    })
  })

  describe('isosceles triangle', () => {
    xit('last two sides are equal', () => {
      const triangle = new Triangle(3, 4, 4)
      expect(triangle.isIsosceles).toBe(true)
    })

    xit('first two sides are equal', () => {
      const triangle = new Triangle(4, 4, 3)
      expect(triangle.isIsosceles).toBe(true)
    })

    xit('first and last sides are equal', () => {
      const triangle = new Triangle(4, 3, 4)
      expect(triangle.isIsosceles).toBe(true)
    })

    xit('equilateral triangles are also isosceles', () => {
      const triangle = new Triangle(4, 4, 4)
      expect(triangle.isIsosceles).toBe(true)
    })

    xit('no sides are equal', () => {
      const triangle = new Triangle(2, 3, 4)
      expect(triangle.isIsosceles).toBe(false)
    })

    xit('first triangle inequality violation', () => {
      const triangle = new Triangle(1, 1, 3)
      expect(triangle.isIsosceles).toBe(false)
    })

    xit('second triangle inequality violation', () => {
      const triangle = new Triangle(1, 3, 1)
      expect(triangle.isIsosceles).toBe(false)
    })

    xit('third triangle inequality violation', () => {
      const triangle = new Triangle(3, 1, 1)
      expect(triangle.isIsosceles).toBe(false)
    })

    xit('sides may be floats', () => {
      const triangle = new Triangle(0.5, 0.4, 0.5)
      expect(triangle.isIsosceles).toBe(true)
    })
  })

  describe('scalene triangle', () => {
    xit('no sides are equal', () => {
      const triangle = new Triangle(5, 4, 6)
      expect(triangle.isScalene).toBe(true)
    })

    xit('all sides are equal', () => {
      const triangle = new Triangle(4, 4, 4)
      expect(triangle.isScalene).toBe(false)
    })

    xit('first and second sides are equal', () => {
      const triangle = new Triangle(4, 4, 3)
      expect(triangle.isScalene).toBe(false)
    })

    xit('first and third sides are equal', () => {
      const triangle = new Triangle(3, 4, 3)
      expect(triangle.isScalene).toBe(false)
    })

    xit('second and third sides are equal', () => {
      const triangle = new Triangle(4, 3, 3)
      expect(triangle.isScalene).toBe(false)
    })

    xit('may not violate triangle inequality', () => {
      const triangle = new Triangle(7, 3, 2)
      expect(triangle.isScalene).toBe(false)
    })

    xit('sides may be floats', () => {
      const triangle = new Triangle(0.5, 0.4, 0.6)
      expect(triangle.isScalene).toBe(true)
    })
  })
})
