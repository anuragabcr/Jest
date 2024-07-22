import { PasswordChecker, PasswordErrors } from "../app/PasswordChecker"

describe('PasswordChecker test suite', () => {
    let sut:PasswordChecker;

    beforeEach(() => {
        sut = new PasswordChecker()
    })

    it('Password with less than 8 chars is invalid', () => {
        const actual = sut.checkPassword('1234hh')
        expect(actual.valid).toBe(false)
        expect(actual.reasons).toContain(PasswordErrors.SHORT)
    })

    it('Password with more than 8 chars is valid', () => {
        const actual = sut.checkPassword('1234AJHhjb')
        expect(actual.valid).toBe(true)
        expect(actual.reasons).not.toContain(PasswordErrors.SHORT)
    })

    it('Password with no uppercase chars is invalid', () => {
        const actual = sut.checkPassword('cahv7y7aa')
        expect(actual.valid).toBe(false)
        expect(actual.reasons).toContain(PasswordErrors.NO_UPPER_CASE)
    })

    it('Password with uppercase chars is valid', () => {
        const actual = sut.checkPassword('hbjhHJH78y')
        expect(actual.valid).toBe(true)
        expect(actual.reasons).not.toContain(PasswordErrors.NO_UPPER_CASE)
    })

    it('Password with no lowercase chars is invalid', () => {
        const actual = sut.checkPassword('GVHHJBJ676')
        expect(actual.valid).toBe(false)
        expect(actual.reasons).toContain(PasswordErrors.NO_LOWER_CASE)
    })

    it('Password with lowercase chars is valid', () => {
        const actual = sut.checkPassword('hbjhHJH78y')
        expect(actual.valid).toBe(true)
        expect(actual.reasons).not.toContain(PasswordErrors.NO_LOWER_CASE)
    })
})