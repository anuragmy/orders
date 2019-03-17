const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const customer = require("./routes/customer");
const delivery = require("./routes/delivery");
const admin = require("./modals/admin");

const passport = require("passport");

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(passport.initialize());
app.use(bodyParser.json());

app.use("/customer", customer);
app.use("/delivery", delivery);
app.use("/admin", admin);

//database connection
mongoose
  .connect("mongodb://localhost/try", {
    useNewUrlParser: true
  })
  .then(() => console.log(`Connected to database`), {
    useNewUrlParser: true
  })
  .catch(err => console.log(`could not connect to database`));

app.listen(port, () => {
  console.log(`Connected to ${port}...`);
});
