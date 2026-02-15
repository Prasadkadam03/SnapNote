import { Router, Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';
import Note from '../models/Note';
import { generatePassword, hashPassword, verifyPassword } from '../services/passwordService';
import { summarize } from '../services/aiService';
import { ApiError } from '../middleware/errorHandler';

const router = Router();

interface CreateNoteRequest {
    content: string;
}

interface UnlockNoteRequest {
    password: string;
}

/**
 * POST /api/notes
 * Create a new private note
 */
router.post('/', async (req: Request<{}, {}, CreateNoteRequest>, res: Response, next: NextFunction) => {
    try {
        const { content } = req.body;

        // Validation
        if (!content || content.trim() === '') {
            throw new ApiError('Content is required', 400);
        }

        if (content.length > 500) {
            throw new ApiError('Content must be 500 characters or less', 400);
        }

        // Generate ID and password
        const id = uuidv4();
        const password = generatePassword();
        const passwordHash = await hashPassword(password);

        // Create and save note
        const note = new Note({
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
    } catch (error) {
        next(error);
    }
});

/**
 * POST /api/notes/:id/unlock
 * Unlock a note with password
 */
router.post('/:id/unlock', async (req: Request<{ id: string }, {}, UnlockNoteRequest>, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const { password } = req.body;

        // Find note
        const note = await Note.findById(id);
        if (!note) {
            throw new ApiError('Note not found', 404);
        }

        // Validate password input
        if (!password) {
            throw new ApiError('Password is required', 400);
        }

        // Verify password
        const isValid = await verifyPassword(password, note.passwordHash);
        if (!isValid) {
            throw new ApiError('Invalid password', 401);
        }

        res.json({
            content: note.content
        });
    } catch (error) {
        next(error);
    }
});

/**
 * POST /api/notes/:id/summarize
 * Generate AI summary for a note
 */
router.post('/:id/summarize', async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;

        // Find note
        const note = await Note.findById(id);
        if (!note) {
            throw new ApiError('Note not found', 404);
        }

        // Generate summary
        const summary = await summarize(note.content);

        res.json({
            summary
        });
    } catch (error) {
        next(error);
    }
});

export default router;
