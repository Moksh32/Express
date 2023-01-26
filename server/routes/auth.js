const { application, Router } = require("express");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authentication")

const cookieParser = require('cookie-parser');
router.use(cookieParser())

const { getAllUsers } = require("../controllers/products");
require("../db/connect");
const user = require("../models/userSchema");
router.route("/").get(getAllUsers);


router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ Error: "Fill out all fields" });
  }
  try {
    userexists = await user.findOne({ email: email });
    if (userexists) {
      return res.status(422).json({ Error: "Email is already registered" });
    }
    const users = new user({ name, email, phone, work, password, cpassword });
    if (password != cpassword) {
      res.status(400).json({ message: "password does not match" });
    } else {
      userregister = await users.save();
    }
    if (userregister) {
      res.status(201).json({ Message: "User added" });
    } else {
      res.status(500).json({ error: "Database not found" });
    }
  } catch (error) {
    res.status(400).json({ message: "unknown error" });
  }
});


//login router
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "invalid error" });
  }
  try {
    emailcheck = await user.findOne({ email: email });
    passcheck = await bcrypt.compare(password, emailcheck.password);
    if (emailcheck && passcheck) {
      const token =await emailcheck.genrateAuthToken();
      res.cookie('token', token).send({message :"Success"});
      console.log(token);
    } else {
      res.status(400).json({ error: "Invalid credintials" });
    }
  } catch (error) {
    res.status(500).json({ error: "Unknown Error" });
  }
});


router.get('/abou', authenticate ,(req,res)=>{
  console.log('about ka page')
  res.send(req.rootuser)
})


module.exports = router;