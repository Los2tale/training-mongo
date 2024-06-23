import UserRole from "./user-role.model";
import User from "./user.model";

(async()=>{
    await UserRole.createCollection();
    await User.createCollection();
})();