const express = require('express');
const app = express();
const userRoutes = express.Router();
const User = require('../model/User')
const csv = require('csvtojson')



const multer = require('multer');
const { response } = require('express');

const storage = multer.diskStorage({
  destination : function (req, file, cb){
    return cb(null, "uploads")
  },
  filename: function (req, file, cb) {
    return cb( null, `${Date.now()}-${file.originalname}`)
    
  }
})
const upload = multer({storage});

userRoutes.post('/upload', upload.single('userImport'), async(req, res)=>{
  console.log(req.body)
  console.log(req.file)

try {
    const userData = [];
    csv()
    .fromFile(req.file.path)
    .then(async(  response)=>{

        for(var x = 0; x<response.length; x++){           
            userData.push({
                name: response[x].Name,
                email: response[x].Email,
                address: response[x].Address,
                mobile: response[x].Mobile,
            })
        }
       await User.insertMany(userData)
        console.log(response)
    });

    res.send({status: 400, success: true, msg:"success"})
} catch(error){
    res.send({status: 400, success: false, msg: error.message})
}



})

module.exports = userRoutes;



