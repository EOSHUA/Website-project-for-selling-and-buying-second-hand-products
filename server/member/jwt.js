const jwt = require("jsonwebtoken");

const scecret = 'bananaWithMelons';
async function getToken(user) {
  let token = jwt.sign(user, scecret, { expiresIn: "10m" });
  return token;
}
async function validateToken(req, res, next) {
  if (!req.body.headers.Authorization || !req.body.headers.Authorization.startsWith("Bearer ")) {
   console.log(99);
    return res.sendStatus(401);
  }
  let token = req.body.headers.Authorization.split("Bearer ")[1];
  
  try {
    console.log(token);
   
    const user=jwt.verify(token, scecret);
    req.body.user = user;
    next();
  } catch {
    res.sendStatus(401);
  }
}
async function validateAdmin(req, res, next) {
  if (req.body?.user.permission == "admin") {
    next();
  } else {
    console.log(222);
    res.sendStatus(401);
  }
}
module.exports = { getToken, validateToken, validateAdmin };