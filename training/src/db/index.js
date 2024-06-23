import mongoose from "mongoose";
import { APP_CONFIG } from "../viewmodels/app.config.js";

mongoose.connect(
    APP_CONFIG.MONGO_CONNECTION
).then(()=>{
    console.log('Successfuly conected to database');
}).catch((err)=>{
    console.log('database connected failed')
    console.error(err.message)
})