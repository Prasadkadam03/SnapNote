"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const uuid_1 = require("uuid");
const Note_1 = __importDefault(require("../models/Note"));
const passwordService_1 = require("../services/passwordService");
const aiService_1 = require("../services/aiService");
const errorHandler_1 = require("../middleware/errorHandler");
const router = (0, express_1.Router)();
/**
 * POST /api/notes
 * Create a new private note
 */
router.post('/', async (req, res, next) => {
    try {
        const { content } = req.body;
        // Validation
        if (!content || content.trim() === '') {
            throw new errorHandler_1.ApiError('Content is required', 400);
        }
        if (content.length > 500) {
            throw new errorHandler_1.ApiError('Content must be 500 characters or less', 400);
        }
        // Generate ID and password
        const id = (0, uuid_1.v4)();
        const password = (0, passwordService_1.generatePassword)();
        const passwordHash = await (0, passwordService_1.hashPassword)(password);
        // Create and save note
        const note = new Note_1.default({
            _id: id,
            content: content.trim(),
            passwordHash
        });
        await note.save();
        // Build response
        const url = `/notes/${id}`;
        res.status(201).json({
            id,
            url,
            password
        });
    }
    catch (error) {
        next(error);
    }
});
/**
 * POST /api/notes/:id/unlock
 * Unlock a note with password
 */
router.post('/:id/unlock', async (req, res, next) => {
    try {
        const { id } = req.params;
        const { password } = req.body;
        // Find note
        const note = await Note_1.default.findById(id);
        if (!note) {
            throw new errorHandler_1.ApiError('Note not found', 404);
        }
        // Validate password input
        if (!password) {
            throw new errorHandler_1.ApiError('Password is required', 400);
        }
        // Verify password
        const isValid = await (0, passwordService_1.verifyPassword)(password, note.passwordHash);
        if (!isValid) {
            throw new errorHandler_1.ApiError('Invalid password', 401);
        }
        res.json({
            content: note.content
        });
    }
    catch (error) {
        next(error);
    }
});
/**
 * POST /api/notes/:id/summarize
 * Generate AI summary for a note
 */
router.post('/:id/summarize', async (req, res, next) => {
    try {
        const { id } = req.params;
        // Find note
        const note = await Note_1.default.findById(id);
        if (!note) {
            throw new errorHandler_1.ApiError('Note not found', 404);
        }
        // Generate summary
        const summary = await (0, aiService_1.summarize)(note.content);
        res.json({
            summary
        });
    }
    catch (error) {
        next(error);
    }
});
exports.default = router;
//# sourceMappingURL=notes.js.map