import Router  from "express";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const router = Router();


router.get('/',(req,res)=>{
    res.render('index')
})

export default router