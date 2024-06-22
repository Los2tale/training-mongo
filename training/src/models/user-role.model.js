import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserRoleSchema = Schema({
    //_id : {type: mongoose.Schema.ObjectId,},
    Name: { type: String, require: true },
    Description: { type: String, default : ""},
    Users: [{
        type: mongoose.Schema.ObjectId,
        require: true,
        ref: "AppUser"
    },],
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

const UserRole = mongoose.model(
    "AppUserRole",
    UserRoleSchema
)

export default UserRole;
