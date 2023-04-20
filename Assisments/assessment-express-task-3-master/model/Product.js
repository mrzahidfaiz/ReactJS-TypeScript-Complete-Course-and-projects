const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type : String
    },
    price: {
        type : Number
    },
    image: {
        type : String
    },
    isActive: {
        type: Boolean,
        default: true,
    
      }
},{
    timestamps: true
  })

module.exports = mongoose.model("Product", productSchema)