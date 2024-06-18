import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import moviesRouter from './src/popular.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8000;


app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/popular', moviesRouter);




app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`));


