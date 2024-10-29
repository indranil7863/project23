import mongoose from 'mongoose';
const mongoURL = "mongodb://127.0.0.1:27017/userdata"
export const connectdb = async () =>{
    try{
        const conn = await mongoose.connect(mongoURL);
        console.log("Database is connected successfully!");
    }catch(error){
        console.log("error: connection to MongoDB", error.message);
        exit(1);
    }
}