const express = require("express");
const router = express.Router();
const User = require("../models/user");
const mongoose = require("mongoose");
const db =
  "mongodb+srv://<some_user>>:<password>@<cluster_name>.7ktse.mongodb.net/";

mongoose
  .connect(db)
  .then(() => {
    console.log("Connected to mongodb");
  })
  .catch((err) => {
    console.log("Error! " + err);
  });

router.get("/", (req, res) => {
  res.send("Response from API Route!");
});

router.post("/register", (req, res) => {
  let UserData = req.body; //1. extract the userData from the request object
  let user = new User(UserData); //2. convert it into the User model that mongoose understands
  //3. save the user to the database
  user
    .save()
    .then((registeredUser) => {
      res.status(200).send(registeredUser);
    })
    .catch((error) => {
      console.log(error);
    });
});

router.post("/login", (req, res) => {
  let userData = req.body;
  User.findOne({ email: userData.email })
    .then((userFound) => {
      if (!userFound) {
        res.status(401).send("Invalid Email");
      } else if (userFound.password !== userData.password) {
        res.status(401).send("Invalid Password");
      } else {
        res.status(200).send(userFound);
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
