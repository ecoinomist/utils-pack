import { aspectRatio, widthScaled } from '../media'

test(`${aspectRatio.name}() returns correct aspect ratio from given width and height`, () => {
  // 4:3
  expect(aspectRatio(4, 3)).toBe('4:3')
  expect(aspectRatio('4', 3)).toBe('4:3')
  expect(aspectRatio(4, '3')).toBe('4:3')
  expect(aspectRatio('4', '3')).toBe('4:3')
  expect(aspectRatio(200, 150)).toBe('4:3')
  expect(aspectRatio(300, 225)).toBe('4:3')
  expect(aspectRatio(400, 300)).toBe('4:3')
  expect(aspectRatio(500, 375)).toBe('4:3')

  expect(aspectRatio(501, 375)).not.toBe('4:3')
  expect(aspectRatio(500, 374)).not.toBe('4:3')
  expect(aspectRatio(450, 338)).not.toBe('4:3')

  // 16:9
  expect(aspectRatio(16, 9)).toBe('16:9')
  expect(aspectRatio(400, 225)).toBe('16:9')
  expect(aspectRatio(800, 450)).toBe('16:9')
  expect(aspectRatio(1200, 675)).toBe('16:9')

  expect(aspectRatio(1601, 900)).not.toBe('16:9')
  expect(aspectRatio(1600, 899)).not.toBe('16:9')

  // 21:9 (normalised to 7:3)
  expect(aspectRatio(21, 9)).toBe('7:3')
  expect(aspectRatio(350, 150)).toBe('7:3')
  expect(aspectRatio(525, 225)).toBe('7:3')
  expect(aspectRatio(700, 300)).toBe('7:3')
  expect(aspectRatio(1050, 450)).toBe('7:3')

  expect(aspectRatio(1051, 450)).not.toBe('7:3')
  expect(aspectRatio(1050, 451)).not.toBe('7:3')

  // 40:9
  expect(aspectRatio(40, 9)).toBe('40:9')
  expect(aspectRatio(400, 90)).toBe('40:9')
  expect(aspectRatio(600, 135)).toBe('40:9')
  expect(aspectRatio(1000, 225)).toBe('40:9')
  expect(aspectRatio(1600, 360)).toBe('40:9')

  expect(aspectRatio(1601, 360)).not.toBe('40:9')
  expect(aspectRatio(1601, 361)).not.toBe('40:9')
  expect(aspectRatio(1600, 359)).not.toBe('40:9')
})

test(`${widthScaled.name}() returns correct size for given resolution and original width/height`, () => {
  expect(widthScaled(50, 10, 20)).toEqual(5)
  expect(widthScaled(5000, 100, 200)).toEqual(50)
  expect(widthScaled(100, 10, 10)).toEqual(10)
  expect(widthScaled(100, 1000, 1000)).toEqual(10)
  expect(widthScaled(100, 25, 25)).toEqual(10)
  expect(widthScaled(10, 3, 1)).toEqual(5) // x2
  expect(widthScaled(20, 2, 1)).toEqual(6) // x3
  expect(widthScaled(30, 3, 1)).toEqual(9) // x3
})
