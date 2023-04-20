const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: {
        type : String
    },
    email: {
        type : String
    },
    message: {
        type: String
      }
},{
    timestamps: true
  })

module.exports = mongoose.model("Contact", contactSchema)