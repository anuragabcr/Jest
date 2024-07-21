import { getStringInfo, StringUtis, toUpperCase } from "../app/Utils";

describe("Utils test suite", () => {
  describe('StringUtils test', () => {
    let sut: StringUtis;

    beforeEach(() => {
      sut = new StringUtis;
    })

    it('should return correct upperCase', () => {
      const actual = sut.toUpperCase('asd');

      expect(actual).toBe('ASD')
    })

    it('should throw error on invalid argument', () => {
      expect(() => sut.toUpperCase('')).toThrow('Invalid argument!')
    })

    it('should throw error on invalid argument - try catch', (done) => {
      try {
        sut.toUpperCase('')
        done('StringUtils should through an error for invalid arguments!')
      } catch (error) {
        expect(error).toBeInstanceOf(Error)
        expect(error).toHaveProperty('message', 'Invalid argument!')
        done()
      }
    })
  })

  it("should return uppercase", () => {
    const result = toUpperCase("abc");
    expect(result).toBe("ABC");
  });

  it('should return info for valid string', () => {
    const actual = getStringInfo('Anurag Kumar')

    expect(actual.lowerCase).toBe('anurag kumar')
    expect(actual.upperCase).toBe('ANURAG KUMAR')
    expect(actual.length).toBe(12)
    expect(actual.characters).toHaveLength(12)
    expect(actual.characters).toEqual(['A', 'n', 'u', 'r', 'a', 'g', ' ', 'K', 'u', 'm', 'a', 'r'])
    expect(actual.extraInfo).toEqual({})
    expect(actual.lowerCase).toContain<string>('g k')
    expect(actual.extraInfo).not.toBe(undefined)
  })
});
