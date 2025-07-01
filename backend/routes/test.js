const express = require("express");
const router = express.Router();

router.post("/submit", (req, res) => {
  const { userId, answers } = req.body;
  // Save to DB (pseudo)
  console.log("Received answers:", answers);
  res.json({ message: "Answers received." });
});

module.exports = router;
