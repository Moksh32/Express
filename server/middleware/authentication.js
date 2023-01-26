const jwt = require("jsonwebtoken");
const user = require("../models/userSchema");

 async function authenticate(req, res, next) {
    try {
        const token = req.cookies.token;
        const verifytoken = jwt.verify(token, process.env.SECRET_KEY);
        
        const rootuser = await user.findOne({ _id:verifytoken._id, "tokens.token":token });
      
        if (!rootuser) {
           console.log('Error found');
        }
        req.token = token;
        req.rootuser = rootuser;
        req.userID = rootuser._id;
        // res.status(200).send("authorized")
        next();
    } catch (error) {
        res.status(401).send("unauthorized");
        console.log(error);
    }
}
 module.exports = authenticate;