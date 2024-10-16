import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://YASHRANA09:yash123@foodapp.mry7b.mongodb.net/FOODAPP'); // No deprecated options
        console.log('DB CONNECTED');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit the application in case of an error
    }
};
