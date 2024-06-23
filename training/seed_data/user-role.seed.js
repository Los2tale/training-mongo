import UserRole from '../src/models/user-role.model.js'
(async()=>{
    const UserRoleSeed = [{
        _id:'66767d14d42adb13190beb0a',
        Name: 'Admin',
        Users:['66767e79d42adb13190beb1b'],
        Description: '',
        CreatedBy: 'admin',
        UpdatedBy: 'admin'
    }]

    for (const x of UserRoleSeed) {
        await UserRole.findByIdAndUpdate(x._id,x,{new: true,upsert: true })
    }
    console.log('UserRole is seeded complete');
})();