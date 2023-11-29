import mongoose from "mongoose";

import { DB_NAME } from "../constant.js";

const connectDB =async ()=>{
    try {
        const connectionDB = await mongoose.connect(`${process.env.MONGO}/${DB_NAME}`)
        console.log(`\n MongoDB connected successfully !! DB HOST ${connectionDB.connection.host}`)
        
    } catch (error) {
        console.log('mongose connection error ',error);
        process.exit(1);
    }
}


export default connectDB;