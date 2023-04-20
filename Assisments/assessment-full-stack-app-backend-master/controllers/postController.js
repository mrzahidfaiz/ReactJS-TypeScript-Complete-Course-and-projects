const Post = require('../models/Post')


// Add post
exports.addPost = async (req, res) => {
  const newPost = new Post(req.body);

  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
}
// Read one post
exports.getOnePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
}

//update post
exports.updatePost = async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

// read all post
exports.reallAll = async (req, res) => {

  try {
    const post = await Post.find({});
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);

  };
}
// delete post

exports.deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json("post has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
};