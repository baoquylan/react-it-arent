const config = require("../config");
const jwt =require("jsonwebtoken");
const { ResponseData } = require("../util/ResponseData.util");


 const validateToken = async (req, res, next) => {
  try {
    req.expireToken = false
    let tokenB = req.header('authorization') || req.cookies.token;
    let split = tokenB.split(' ')
    let token = split[1]
    jwt.verify(token, config.jwtKey, (err, decoded) => {
      if (err) {
        res.status(401).json(new ResponseData(false, null,'Token cannot validate'));
      } else {
        req.decoded = decoded;
        next();
      }
    })
  } catch {
    res.status(401).json(new ResponseData(false, null, 'Token cannot validate'));
  }
};
module.exports = {
  validateToken,
}