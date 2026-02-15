"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyPassword = exports.hashPassword = exports.generatePassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const crypto_1 = __importDefault(require("crypto"));
const SALT_ROUNDS = 10;
/**
 * Generate a secure random password
 */
const generatePassword = () => {
    return crypto_1.default.randomBytes(8).toString('base64').slice(0, 12);
};
exports.generatePassword = generatePassword;
/**
 * Hash a password using bcrypt
 */
const hashPassword = async (password) => {
    return bcrypt_1.default.hash(password, SALT_ROUNDS);
};
exports.hashPassword = hashPassword;
/**
 * Verify a password against a hash
 */
const verifyPassword = async (password, hash) => {
    return bcrypt_1.default.compare(password, hash);
};
exports.verifyPassword = verifyPassword;
//# sourceMappingURL=passwordService.js.map