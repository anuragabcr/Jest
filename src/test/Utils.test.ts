import { getStringInfo, toUpperCase } from "../app/Utils";

describe("Utils test suite", () => {
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
