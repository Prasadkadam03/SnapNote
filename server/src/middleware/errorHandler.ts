import { Request, Response, NextFunction } from 'express';

/**
 * Custom error class for API errors
 */
export class ApiError extends Error {
    statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
    }
}

/**
 * Global error handling middleware
 * Ensures consistent error response format
 */
export const errorHandler = (
    err: Error | ApiError,
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    console.error('Error:', err.message);

    const statusCode = 'statusCode' in err ? err.statusCode : 500;

    res.status(statusCode).json({
        error: err.message || 'Internal server error'
    });
};
