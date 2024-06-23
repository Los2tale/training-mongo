import dotenv from 'dotenv';
import path from 'path';
const defaultPath = path.join(__dirname,"../..",'.env')
const env = dotenv.config(defaultPath);

export const APP_CONFIG = {
    MONGO_CONNECTION : env.parsed['MONGO_CONNECTION'] ?? '',
    TOKEN : env.parsed['TOKEN'] ?? '',
    ACCESS_KEY : env.parsed['ACCESS_KEY'] ?? '',
    SECRET_ACCESS_KEY : env.parsed['SECRET_ACCESS_KEY'] ?? '',
};
