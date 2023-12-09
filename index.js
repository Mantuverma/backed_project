// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./src/db/index.js";
import {app} from './src/app.js'
import { DB_NAME } from "./src/constant.js";
dotenv.config({
    path: './.env'
})


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(` Server is running at port : ${process.env.PORT} with ${DB_NAME}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})










