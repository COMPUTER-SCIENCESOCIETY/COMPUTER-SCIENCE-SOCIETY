import mongoose from "mongoose";

const ConnectDataBase = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connect:${conn.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to MongoDB ${error.message}`);
        process.exit(1);
    }
}

export default ConnectDataBase