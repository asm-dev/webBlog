const mongoose = require('mongoose')

const Schema = mongoose.Schema
const blogSchema = new Schema({
    blogImg: String,
    blogTitle: String,
    blogText: String,
    bloggerImg: String,
    bloggerName: String,
    bloggerJob: String
})

module.exports = mongoose.model('blog', blogSchema)