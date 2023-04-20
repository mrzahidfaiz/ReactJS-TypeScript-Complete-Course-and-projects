const express = require('express');
const post = require('../controllers/postController')
const user = require('../controllers/userController')
const postRoute = express.Router();



postRoute.route('/add').post( user.authMiddleware, post.addPost);
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
 } = require("../middleware/verifyToken");

postRoute.post("/addPost", verifyToken, post.addPost);
postRoute.get("/find/:id", verifyToken, post.getOnePost);
postRoute.put("/:id", verifyToken, post.updatePost);
postRoute.get("/", verifyToken, post.reallAll);
postRoute.delete("/:id", verifyToken, post.deletePost);
  

module.exports = postRoute