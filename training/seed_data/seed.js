import seeder from 'mongoose-seed'
import { APP_CONFIG } from '../src/viewmodel/app.config'

const db =APP_CONFIG.MONGO_CONNECTION;

seeder.connect(db,()=>{
    seeder.loadModels([
        './src/models/user-role.model.js'
    ])
    seeder.clearModels(['AppUserRole'])
    
})