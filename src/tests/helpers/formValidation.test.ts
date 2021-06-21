import { allFieldsFilled } from 'helpers/formValidation'

describe('allFieldsFilled', () => {
  describe('Given empty value to the array', () => {
    it('returns false', () => {
      const result = allFieldsFilled(['', 'test'])

      expect(result).toBeFalsy()
    })
  })

  describe('Given empty array', () => {
    it('returns true', () => {
      const result = allFieldsFilled([])

      expect(result).toBeTruthy()
    })
  })

  describe('Given valid array', () => {
    it('returns true', () => {
      const result = allFieldsFilled(['hello', 'world'])

      expect(result).toBeTruthy()
    })
  })
})
