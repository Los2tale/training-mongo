import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = Schema({
    //_id : {type: mongoose.Schema.ObjectId,},
    Username: { type: String, require: true },
    Password: { type: String, require: true },
    ProfileName: { type: String, require: true },
    FirstName: { type: String, require: true },
    LastName: { type: String, require: true },
    ImageProfile: {
        Data: { type: Buffer },
        ContentType: { type: String }
    },
    Role: {
        type: mongoose.Schema.ObjectId,
        require: true,
        ref: "AppUserRole"
    },
    CreatedBy: {
        type: String
    },
    CreatedDate: {
        type: Date,
        require: true,
        default: new Date()
    },
    UpdatedBy: {
        type: String
    },
    UpdatedDate: {
        type: Date,
        require: true,
        default: new Date()
    }
});

const User = mongoose.model(
    "AppUser",
    UserSchema
)

export default User;

// UserSchema.method('toClient', () => {
//     var obj = this.toObject();
//     obj.id = obj._id,
//         delete obj._id
// })