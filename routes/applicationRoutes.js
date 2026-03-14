const express = require("express");
const router = express.Router();
const Application = require("../models/Application");

// Apply to job (POST)
router.post("/", async (req, res) => {
  try {
    const { title, company } = req.body;

    const application = new Application({
      title,
      company
    });

    await application.save();
    res.json({ message: "Application submitted!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all applications (GET)
router.get("/", async (req, res) => {
  const applications = await Application.find();
  res.json(applications);
});

module.exports = router;
