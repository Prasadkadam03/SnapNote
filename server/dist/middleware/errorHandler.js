"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.ApiError = void 0;
/**
 * Custom error class for API errors
 */
class ApiError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}
exports.ApiError = ApiError;
/**
 * Global error handling middleware
 * Ensures consistent error response format
 */
const errorHandler = (err, req, res, next) => {
    console.error('Error:', err.message);
    const statusCode = 'statusCode' in err ? err.statusCode : 500;
    res.status(statusCode).json({
        error: err.message || 'Internal server error'
    });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=errorHandler.js.map