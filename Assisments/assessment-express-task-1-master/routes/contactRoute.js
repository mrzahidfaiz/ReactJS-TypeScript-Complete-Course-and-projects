const express = require('express');
const app = express();
const contactRoutes = express.Router();

const Contact = require('../model/Contact')

contactRoutes.post('/add', async (req, res)=>{
    const newContact = new Contact(req.body);
    try{
        const savedContact = await newContact.save()
        res.status(200).json(savedContact);
     
    } catch (err){
        res.status(500).json(err)
    }
});


contactRoutes.get("/", async (req, res) => {
    try {
      const contacts = await Contact.find({ });
      res.json(contacts);
      console.log(contacts);
    } catch (err) {
      console.log(err);
    }
  });

module.exports =  contactRoutes