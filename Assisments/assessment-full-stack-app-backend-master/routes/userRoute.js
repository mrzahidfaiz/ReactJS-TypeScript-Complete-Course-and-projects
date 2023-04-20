const express = require('express');
const user = require('../controllers/userController')
const router = express.Router();

router.post('/register', user.register)
router.post('/newuser', user.authMiddleware, user.newUser)

router.post('/login', user.login)


router.get('/index', ()=>{
    res.json({'access': true})
})

module.exports = router