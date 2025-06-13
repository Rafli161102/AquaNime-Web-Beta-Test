// backend/routes/feedback.js
const express = require('express');
const { addFeedback } = require('../controllers/feedbackController');

const router = express.Router();

router.route('/').post(addFeedback);

module.exports = router;