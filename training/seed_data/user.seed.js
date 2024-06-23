import { EncryptPasswordAsync } from "../src/helper/password.shared.js";
import User from '../src/models/user.model.js'
import process from 'process'

(async()=>{
    let password = await EncryptPasswordAsync("P@ssw0rd")
    const UserSeed = [{
        _id: '66767e79d42adb13190beb1b',
        Username: 'admin',
        Password: password,
        ProfileName: 'admin',
        FirstName: 'admin',
        LastName: 'admin',
        Role: {_id:'66767d14d42adb13190beb0a'},
        CreatedBy: 'admin',
        UpdatedBy: 'admin'
    }]
    for (const x of UserSeed) {
        await User.findByIdAndUpdate(x._id,x,{new: true,upsert: true })
    }
    console.log('User is seeded complete');
    process.exit(0)
})(); 