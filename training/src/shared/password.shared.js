import bcrypt from 'bcryptjs'

export const EncryptPasswordAsync = async(password)=>{
    try{
        let encryptPassword = await bcrypt.hashSync(password,10)
        return encryptPassword
    }catch (error){
        console.log('ER_001',error.message);
        throw error;
    }
}

export const ComparePasswordAsync = async(password,encryptPassword)=>{
    try{
        let comparePassword = await bcrypt.compareSync(password,encryptPassword)
        return comparePassword
    }catch (error){
        console.log('ER_001',error.message);
        throw error;
    }
}