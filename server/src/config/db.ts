import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI as string);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        const err = error as Error;
        console.error(`MongoDB connection error: ${err.message}`);
        console.error('Please ensure MongoDB is running on localhost:27017 or update MONGODB_URI in .env');
    }
};

export default connectDB;
