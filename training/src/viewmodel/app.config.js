import dotenv from 'dotenv';

import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const test = path.join(__dirname,"../..",'.env')
const env = dotenv.config(test);
    
export const APP_CONFIG = {
    MONGO_CONNECTION : env.parsed['MONGO_CONNECTION'] ?? '',
    TOKEN :env.parsed['TOKEN'] ?? '',
    ACCESS_KEY : env.parsed['ACCESS_KEY'] ?? '',
    SECRET_ACCESS_KEY: env.parsed['SECRET_ACCESS_KEY'] ?? '',
};