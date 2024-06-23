import mongoose from "mongoose";
import { APP_CONFIG } from './src/viewmodels/app.config.js'
import './seed_data/index.js'
 
(async()=>{
    await mongoose.connect(
        APP_CONFIG.MONGO_CONNECTION
    ).then(async ()=>{
        console.log('Successfuly conected to database');
    }).catch((err)=>{
        console.log('database connected failed')
        console.error(err.message)
    })
})();


