import mongoose, { Schema } from 'mongoose';

export interface INote {
    _id: string;
    content: string;
    passwordHash: string;
    createdAt: Date;
}

const noteSchema = new Schema<INote>({
    _id: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,
        maxlength: 500
    },
    passwordHash: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model<INote>('Note', noteSchema);
