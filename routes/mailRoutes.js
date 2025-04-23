const express = require('express');
const mailController = require('../controllers/mailController');
const router = express.Router();

router.post('/submit', mailController.submit);

module.exports = router;
