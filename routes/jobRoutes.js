const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    { title: "Frontend Developer", company: "Airbnb" },
    { title: "Data Scientist Intern", company: "Uber" },
    { title: "Product Designer", company: "Spotify" }
  ]);
});

module.exports = router;