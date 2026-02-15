import mongoose from 'mongoose';
export interface INote {
    _id: string;
    content: string;
    passwordHash: string;
    createdAt: Date;
}
declare const _default: mongoose.Model<INote, {}, {}, {}, mongoose.Document<unknown, {}, INote, {}, {}> & INote & Required<{
    _id: string;
}> & {
    __v: number;
}, any>;
export default _default;
//# sourceMappingURL=Note.d.ts.map