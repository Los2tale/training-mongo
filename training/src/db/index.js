import mongoose from "mongoose";
import { APP_CONFIG } from "../viewmodel/app.config.js";

//console.log(APP_CONFIG)

mongoose.connect(
    APP_CONFIG.MONGO_CONNECTION
).then(()=>{
    console.log('Successfilly connected to database')
}).catch((err)=>{
    console.log('database connected failes')
    console.error(err.message)
})