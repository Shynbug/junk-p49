// routes/auth.js (or test.js or payment.js)
const express = require('express');
const router = express.Router();

// Define routes
router.get('/', (req, res) => {
  res.send('This is the auth route');
});

module.exports = router; // ✅ Export the router

