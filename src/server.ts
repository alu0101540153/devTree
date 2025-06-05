import express from 'express' // sintaxis de ESM
import 'dotenv/config';
import router from './router';
import { connectDB } from './config/db';

const app = express();

connectDB()

// read form data
app.use(express.json())


app.use('/', router)  // 

export default app