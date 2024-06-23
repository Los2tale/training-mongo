import mongoose from "mongoose";
import { AuditlitySchema } from "./auditlity.model.js";
const Shema = mongoose.Schema;

const UserSchema = Shema({
  Username: { type: String, require: true },
  Password: { type: String, require: true },
  ProfileName: { type: String, require: true },
  FirstName: { type: String, require: true },
  LastName: { type: String, require: true },
  ImageProfile: {
    Data: { type: Buffer },
    ContentType: { type: String },
  },
  // Remark : One to Many (Relationship)
  Role: {
    type: mongoose.Schema.ObjectId,
    require: true,
    ref: "AppUserRole",
  },
  ...AuditlitySchema
});

const User = mongoose.model("AppUser", UserSchema, "AppUser");

export default User;
