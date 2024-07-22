export enum PasswordErrors {
    SHORT = 'Password is too short!',
    NO_UPPER_CASE = 'Upper Case char required!',
    NO_LOWER_CASE = 'Lower Case char required!'
}

export interface CheckResult {
    valid: boolean,
    reasons: PasswordErrors[]
}

export class PasswordChecker {
    public checkPassword(password: string): CheckResult {
        let results:CheckResult = { valid: true, reasons:[] };

        if (password.length < 8) {
            results.valid = false
            results.reasons.push(PasswordErrors.SHORT)
        } else if (password == password.toLowerCase()) {
            results.valid = false
            results.reasons.push(PasswordErrors.NO_UPPER_CASE)
        } else if (password == password.toUpperCase()) {
            results.valid = false
            results.reasons.push(PasswordErrors.NO_LOWER_CASE)
        }
        return results
    }
}