/**
 * Generate a secure random password
 */
export declare const generatePassword: () => string;
/**
 * Hash a password using bcrypt
 */
export declare const hashPassword: (password: string) => Promise<string>;
/**
 * Verify a password against a hash
 */
export declare const verifyPassword: (password: string, hash: string) => Promise<boolean>;
//# sourceMappingURL=passwordService.d.ts.map