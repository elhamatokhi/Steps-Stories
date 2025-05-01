import Router  from "express";
import { getPosts, savePosts } from "../utils/file_helper.js";
import { render } from "ejs";
import { get } from "mongoose";

const router = Router();

export default(upload)=>{
  router.get('/',(req,res)=>{
      res.render('index')
  })

// Display
router.get('/entries',(req,res)=>{
  const posts = getPosts();
  const ID = req.params.id
  const post = posts[ID]
  res.render('entries', { posts });
  
})
// Add
  router.get('/add',(req,res)=>{
      res.render('add')
  })

  router.post('/add', upload.single('image'),(req,res)=>{
    const posts = getPosts()

    posts.push({
        TripTitle: req.body.TripTitle,
        Data: req.body.date,
        location: req.body.location,
        Story: req.body.story,
        tags: req.body.tags,
        image: req.file ? '/uploads/'+req.file.filename : '/images/default.jpg'
    })
    savePosts(posts)
    res.redirect('/entries')
  })


  // Edit
  router.get('/edit/:id',(req,res)=>{
    const posts = getPosts()
    const ID = req.params.id
    const post = posts[ID]
    res.render('edit',{id:ID, post})
  })

  // router.post('/edit/:id',(req,res)=>{
  //   const id = req.params.id

  // })
  return router;
}
