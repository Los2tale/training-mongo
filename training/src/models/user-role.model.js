import mongoose from "mongoose";
import { AuditlitySchema } from "./auditlity.model.js";
const Shema = mongoose.Schema;

const UserRoleSchema = Shema({
  Name: { type: String, require: true },
  Description: { type: String, default: "" },
  // Remark: Many to One (Relationship)
  Users: [{
    type: mongoose.Schema.ObjectId,
    ref: "AppUser",
  }],
  ...AuditlitySchema
});

const UserRole = mongoose.model("AppUserRole", UserRoleSchema, "AppUserRole");

export default UserRole;