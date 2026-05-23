const express = require("express");
const router = express.Router();

router.get("/service", (req, res) => {
  res.json({
    name: "Ravindra Hero Honda Service Centre",
    address: "Bus Stand, Pali, Mahendragarh, Haryana",
    contact: "9050866123",
    charge: "₹150 General Checking",
    services: [
      "General Bike Service",
      "Engine Repair",
      "Oil Change",
      "Brake Work",
      "Full Bike Checkup"
    ]
  });
});

module.exports = router;