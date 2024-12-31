const express = require("express");
const router = express.Router();
const User = require("../models/user");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

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
      let payload = { subject: registeredUser._id };
      let token = jwt.sign(payload, "secretKey");
      res.status(200).send({ token });
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
        let payload = { subject: userFound._id };
        let token = jwt.sign(payload, "secretKey");
        res.status(200).send({ token });
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

router.get("/events", (req, res) => {
  let events = [
    {
      _id: "1",
      name: "Auto Expo",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
    {
      _id: "2",
      name: "Auto Expo",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
    {
      _id: "3",
      name: "Auto Expo",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
    {
      _id: "4",
      name: "Auto Expo",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
    {
      _id: "5",
      name: "Auto Expo",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
    {
      _id: "6",
      name: "Auto Expo",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
  ];
  res.json(events);
});

router.get("/special", (req, res) => {
  let events = [
    {
      _id: "1",
      name: "Auto Expo",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
    {
      _id: "2",
      name: "Auto Expo",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
    {
      _id: "3",
      name: "Auto Expo",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
    {
      _id: "4",
      name: "Auto Expo",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
    {
      _id: "5",
      name: "Auto Expo",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
    {
      _id: "6",
      name: "Auto Expo",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
  ];
  res.json(events);
});
module.exports = router;
