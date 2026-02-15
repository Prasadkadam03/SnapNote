"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = async () => {
    try {
        const conn = await mongoose_1.default.connect(process.env.MONGODB_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch (error) {
        const err = error;
        console.error(`MongoDB connection error: ${err.message}`);
        console.error('Please ensure MongoDB is running on localhost:27017 or update MONGODB_URI in .env');
    }
};
exports.default = connectDB;
//# sourceMappingURL=db.js.map