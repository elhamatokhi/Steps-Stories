import Router  from "express";
import { getPosts, savePosts } from "../utils/file_helper.js";

const router = Router();

export default(upload)=>{
  router.get('/',(req,res)=>{
      res.render('index')
  })

// Add
  router.get('/add',(req,res)=>{
      res.render('add')
  })

  router.post('/add', upload.single('image'),(req,res)=>{
    console.log(req.body)
    const posts = getPosts()

    posts.push({
        TripTitle: req.body.TripTitle,
        image: req.file ? '/uploads/'+req.file.filename : null
    })
    savePosts(posts)
    res.redirect('/')
  })

  return router;
}
