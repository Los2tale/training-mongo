import { Auditlity } from "./master.viewmodel.js"

export const UserViewModel = {
    _id : '',
    userName : '',
    passWord : '',
    profileName : '',
    firstName : '',
    lastName : '',
    improfile:ImageProfileViewModel,
    roles:Array<UserRoleViewModel>[],
    ...Auditlity
}

export const UserRoleViewModel = {
    _id : '',
    name : '',
    description : '',
    ...Auditlity
}

export const ImageProfileViewModel = {
    _id : '',
    data : '', //buffer
    contentType : '',
}