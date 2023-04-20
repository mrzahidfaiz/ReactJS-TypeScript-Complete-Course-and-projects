const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {
        type : String
    },
    email: {
        type : String
    },
    address: {
        type : String
    },
    isActive: {
        type: Boolean,
        default: false,
    
      }
},{
    timestamps: true
  })

module.exports = mongoose.model("User", userSchema)