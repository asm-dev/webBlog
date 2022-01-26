const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Blog = require('../models/blog')

const db =
  'mongodb+srv://asm:asm2000@angular.kfs33.mongodb.net/webBlog?retryWrites=true&w=majority'

mongoose.connect(db, function (err) {
  if (err) {
    console.log('Error' + err)
  } else {
    console.log('connected to mongodb')
  }
})

router.get('/', function (req, res) {
  res.send('From api route')
})

router.post('/addblog', function (req, res) {
  let blogData = req.body
  let blog = new Blog(blogData)

  blog.save(function (error, addedBlog) {
    if (error) {
      console.log(error)
    } else {
      res.status(200).send(addedBlog)
    }
  })
})

router.get('/blogs', function (req, res) {
  try {
    Blog.find().then(function (result) {
      res.json({
        result,
      })
    })
  } catch (err) {
    console.log(err)
  }
})

module.exports = router
