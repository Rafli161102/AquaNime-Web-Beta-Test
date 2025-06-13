// backend/routes/contact.js
const express = require('express');
const { addContact } = require('../controllers/contactController');

const router = express.Router();

router.route('/').post(addContact);

module.exports = router;