/**
 * @format
 */
import normalize from './normalizeText'

describe('helper normalizeText', () => {
  it('should adapt the font size', () => {
    expect(normalize(40)).toBe(50)
  })
  it('should adapt the font size for pixelratio 1, width & height', () => {
    expect(normalize(40, 1, 360, 300)).toBe(40)
  })
  it('should adapt the font size for pixelratio 2, width 359 & height', () => {
    expect(normalize(40, 2, 359, 300)).toBe(38)
  })
  it('should adapt the font size for pixelratio 2, width 360 & height', () => {
    expect(normalize(40, 2, 360, 300)).toBe(40)
  })
  it('should adapt the font size for pixelratio 2, width 360 & height 668', () => {
    expect(normalize(40, 2, 360, 668)).toBe(46)
  })
  it('should adapt the font size for pixelratio 3, width & height 300', () => {
    expect(normalize(40, 3, 360, 300)).toBe(40)
  })
  it('should adapt the font size for pixelratio 3, width 361 & height 660', () => {
    expect(normalize(40, 3, 361, 660)).toBe(46)
  })
  it('should adapt the font size for pixelratio 3, width 361 & height 668', () => {
    expect(normalize(40, 3, 361, 668)).toBe(48)
  })
  it('should adapt the font size for pixelratio 3, width 361 & height 900', () => {
    expect(normalize(40, 3, 361, 900)).toBe(50.8)
  })
  it('should adapt the font size for pixelratio 4, width 360 & height 300', () => {
    expect(normalize(40, 4, 360, 300)).toBe(40)
  })
  it('should adapt the font size for pixelratio 4, width 361 & height 300', () => {
    expect(normalize(40, 4, 361, 300)).toBe(48)
  })
  it('should adapt the font size for pixelratio 4, width 361 & height 668', () => {
    expect(normalize(40, 4, 361, 668)).toBe(50)
  })
  it('should adapt the font size for pixelratio 4, width 361 & height 900', () => {
    expect(normalize(40, 4, 361, 900)).toBe(56)
  })
})
