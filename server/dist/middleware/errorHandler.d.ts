import { Request, Response, NextFunction } from 'express';
/**
 * Custom error class for API errors
 */
export declare class ApiError extends Error {
    statusCode: number;
    constructor(message: string, statusCode: number);
}
/**
 * Global error handling middleware
 * Ensures consistent error response format
 */
export declare const errorHandler: (err: Error | ApiError, req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=errorHandler.d.ts.map