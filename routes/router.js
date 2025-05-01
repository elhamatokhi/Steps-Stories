import Router  from "express";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const router = Router();


// Directory setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get('/',(req,res)=>{
    res.render('index')
})

router.get('/add',(req,res)=>{
console.log(req.body)
    res.render('add')
})

export default router