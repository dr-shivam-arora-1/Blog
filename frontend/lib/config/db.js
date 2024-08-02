import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://Blog:Blog@cluster0.lcsks9h.mongodb.net/blog-app');
    console.log("DB Connected");
}