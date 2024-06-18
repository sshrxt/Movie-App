import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import moviesRouter from './routes/popular.js'
import searchRouter from './routes/search.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8000;


app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/popular', moviesRouter);
app.use('/api/search', searchRouter);




app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`));


