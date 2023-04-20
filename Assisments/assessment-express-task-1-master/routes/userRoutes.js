const express = require('express');
const app = express();
const userRoutes = express.Router();

const User = require('../model/User')

userRoutes.post('/add', async (req, res)=>{
    const newUser = new User(req.body);
    try{
        const savedUser = await newUser.save()
        res.status(200).json(savedUser);
        
    } catch (err){
        res.status(500).json(err)
    }
    
})


userRoutes.get("/", async (req, res) => {
    try {
      const users = await User.find({ });
      res.json(users);
      console.log(users);
    } catch (err) {
      console.log(err);
    }
  });

module.exports =  userRoutes