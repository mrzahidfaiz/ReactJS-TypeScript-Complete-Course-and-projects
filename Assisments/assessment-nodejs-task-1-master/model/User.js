const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    address:{
        type: String
    },
    mobile:{
        type: Number
    }
})

module.exports = mongoose.model('User', userSchema)