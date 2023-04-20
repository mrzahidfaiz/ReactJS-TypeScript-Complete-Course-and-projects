const mongoose = require('mongoose')

const Schema = mongoose.Schema

const postSchema = new Schema({
    title : {
        type: String
    },
    description : {
        type: String
    }
},{timestamps: true})

 module.exports = mongoose.model('post', postSchema)