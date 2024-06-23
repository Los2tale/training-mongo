export const AuditlitySchema = {
  CreatedBy: {
    type: String,
  },
  CreatedDate: {
    type: Date,
    require: true,
    default: Date.now(),
  },
  UpdatedBy: {
    type: String,
  },
  UpdatedDate: {
    type: Date,
    require: true,
    default: Date.now(),
  },
};
