const jwt = require("jsonwebtoken");
const env = require("../config/DB")

const verifyToken = (req, res, next) => {
  const authHeader = req?.headers?.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, env.secret, (err, user) => {
        // console.log(user)
        if (err) {
          console.log("Err:", err);
          res.status(403).json("Token is not valid JWT Verify!");
      }
      res.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated!");
  }
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    //   console.log('Verify Result:', res)
    if (res.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
};