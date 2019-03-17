const express = require("express");
const app = express();
const router = express.Router();
const mongoose = require("mongoose");
const Customers = require("../modals/customer");
const Delivery = require("../modals/delivery");
const Order = require("../modals/orders");
const bcrypt = require("bcrypt");
const uuid = require("uuid");

//delivery boy gets the delivery status

router.get("/status", async (req, res) => {
  const catagory = await Order.findOne({ catagory: "Food and Beverages" });
  if (catagory) {
    const locationArray = [
      "24x7 Sector 54, Gurgaon, Lat - 12.21, Long - 28.72",
      "Big Bazaar, Sector 25, Gurgaon, Lat - 12.23, Long - 28.79"
    ];
    const index = Math.ceil(Math.random() * 2);
    const finalLocation = locationArray[index];
    const deliverStatus = await Delivery.find();
    const updateDeliveryLocation = new Delivery({
      ...deliverStatus,
      orderDispatchLocation: finalLocation
    });

    const result = await updateDeliveryLocation.save();
    res.send(result);
  } else {
    const locationArray = [
      "Apollo Medicine, Sector 63, Gurgaon, Lat - 12.25, Long - 28.52",
      "Apollo Medicine, Sector 22, Gurgaon, Lat - 12.20, Long - 28.29"
    ];
    const index = Math.ceil(Math.random() * 2);
    const finalLocation = locationArray[index];
    const deliverStatus = await Delivery.find();
    const updateDeliveryLocation = {
      ...deliverStatus,
      orderDispatchLocation: finalLocation
    };

    const result = await updateDeliveryLocation.save();
    res.send(result);
  }
});

module.exports = router;
