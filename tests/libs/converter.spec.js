const converter = require('../../server/libs/converter')
const numberToLetter = converter.numberToLetter
const numberToLetterCombination = converter.numberToLetterCombination

describe('(lib) Converter', () => {
  describe('(func) numberToLetter', () => {
    it('Should return [a,b,c] when given number 2', () => {
      expect(numberToLetter(2)).to.deep.equal(['a', 'b', 'c'])
    })

    it('Should return [c,d,e] when given string 3', () => {
      expect(numberToLetter('3')).to.deep.equal(['d', 'e', 'f'])
    })

    it('Should return empty array given anything else than 2-9', () => {
      expect(numberToLetter(0)).to.deep.equal([])
      expect(numberToLetter('a')).to.deep.equal([])
      expect(numberToLetter(true)).to.deep.equal([])
      expect(numberToLetter(undefined)).to.deep.equal([])
    })
  })

  describe('(func) numberToLetterCombination', () => {
    it('Should return array of strings ad, ae, af, bd, be, bf, cd, ce, cf  given the input string 23', () => {
      expect(numberToLetterCombination('23')).to.deep.equal(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'])
    })

    it('Should return array of strings ....  given the input number 32', () => {
      expect(numberToLetterCombination(32)).to.deep.equal(['da', 'db', 'dc', 'ea', 'eb', 'ec', 'fa', 'fb', 'fc'])
    })

    it('Should return right array of strings ... given the input number 456', () => {
      expect(numberToLetterCombination(456)).to.deep.equal(['gjm', 'gjn', 'gjo', 'gkm', 'gkn', 'gko', 'glm', 'gln',
      'glo', 'hjm', 'hjn', 'hjo', 'hkm', 'hkn', 'hko', 'hlm', 'hln', 'hlo', 'ijm', 'ijn', 'ijo', 'ikm', 'ikn', 'iko',
      'ilm', 'iln', 'ilo'])
    })

    it('Should return empty array given anything else than series of 2-9 numbers ', () => {
      expect(numberToLetterCombination(203)).to.deep.equal([])
      expect(numberToLetterCombination('203')).to.deep.equal([])
      expect(numberToLetterCombination('2a1')).to.deep.equal([])
      expect(numberToLetterCombination(true)).to.deep.equal([])
      expect(numberToLetterCombination(undefined)).to.deep.equal([])
    })
  })
})
