// backend/routes/idea.js
const express = require('express');
const { addIdea } = require('../controllers/ideaController');

const router = express.Router();

router.route('/').post(addIdea);

module.exports = router;