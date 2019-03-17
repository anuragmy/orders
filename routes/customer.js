const express = require("express");
const app = express();
const router = express.Router();
const mongoose = require("mongoose");
const Customers = require("../modals/customer");
const Order = require("../modals/orders");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const keys = require("../config/keys");
const auth = passport.authenticate("jwt", {
  session: false
});

router.get("/checking", (req, res) => {
  res.send("good working");
});

//registering the customer

router.post("/register", (req, res) => {
  Customers.findOne({
    email: req.body.email
  }).then(user => {
    if (user) {
      return res.status(400).send("User Already Regeistered");
    }

    //validation

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    if (!name || !password || !confirmPassword || !email)
      return res.send("Insufficient details");

    let newUser = new Customers({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
      customerId: uuid()
    });
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;

        newUser
          .save()
          .then(newUser => {
            res.json(newUser);
          })
          .catch(err => {
            return res.send(err.message);
          });
      });
    });
  });
});

//login the customer

router.post("/login", async (req, res) => {
  let user = await Customers.findOne({
    email: req.body.email
  });

  if (!user) return res.status(401).send("Invalid Email");
  const result = await bcrypt.compare(req.body.password, user.password);
  if (!result) return res.status(401).send("Invalid Password");
  //   const paylaod = {
  //     id: user._id,
  //     name: user.name
  //   };
  //   const token = await jwt.sign(paylaod, keys.secretKey, {
  //     expiresIn: 3600 * 4
  //   });
  res.send(user);
});

//

//customer orders items
router.post("/order", async (req, res) => {
  const orders = new Order({
    item: req.body.item,
    catagory: req.body.catagory
  });

  await orders.populate("customerId");
  const result = await orders.save();
  if (result) res.status(200).send(result);
});

//get all users (testing purpose)

router.get("/all", async (req, res) => {
  const result = await Customers.find();
  res.send(result);
});

//see all orders

router.get("/allorders", async (req, res) => {
  const result = await Order.find();
  res.send(result);
});
module.exports = router;
