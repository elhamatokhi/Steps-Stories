import express from 'express'
import path from "path"
import router from './routes/router.js'
import { fileURLToPath } from "url";
import morgan from "morgan";

// Initializing express app
const app = express();
const PORT = 3000;

// Directory setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Middleware setup
app.use(morgan('dev'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))

// Router
app.use('/',router)

app.listen(PORT, ()=>{
    console.log(`Server is listening on port: ${PORT}`)
})