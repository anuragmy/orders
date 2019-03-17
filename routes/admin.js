const express = require("express");
const app = express();
const router = express.Router();
const mongoose = require("mongoose");
const Customers = require("../modals/customer");
const Order = require("../modals/orders");
const Delivery = require("../modals/delivery");
const admin = require("../modals/admin");


//register the admin

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
  
      let newUser = new Admin({
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



//check the registered customers

router.get("/customers", async (req, res) => {
  const customers = await Customers.find();
  res.send(customers);
});


router.post("/login", async (req, res) => {
    let user = await Admin.findOne({
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
  

//chech the customers delivery status

router.get('/customer/delivery/:id', (req,res) => {
    const status = await Delivery.findById(req.params.id);
    res.send(status);
});

//assign delivery guy

router.post('/delivery/:id', (req,res) => {
    let assign = await Delivery.findById(req.params.id); 
    assign = {
        ...assign,
        name:req.body.name
    };
    const result = await assign.save();
    res.send(result);
});


