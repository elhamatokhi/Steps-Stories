import express from 'express'
import path from "path"
import router from './routes/router.js'
import { fileURLToPath } from "url";
import fs from "fs"
import morgan from "morgan";
import multer from 'multer';

// Initializing express app
const app = express();
const PORT = process.env.PORT || 3000;

// Directory setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Middleware setup
app.use(morgan('dev'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:true}))
app.use("/uploads", express.static("uploads"));
app.use(express.static('public'))

// File Setup
if(!fs.existsSync('posts.json')) fs.writeFileSync('posts.json','[]')
if(!fs.existsSync('uploads')) fs.mkdirSync('uploads')

// Multer Setup 
const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: (_,file,cb)=>{
    cb(null, Date.now() + path.extname(file.originalname)) 
  }
})

const upload = multer({storage})

// Router
app.use('/', router(upload))

app.listen(PORT, ()=>{
    console.log(`Server is listening on port: ${PORT}`)
})