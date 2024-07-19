const express = require("express");
const router = express.Router({ mergeParams: true });
const { createEvent } = require('../controllers/events');

// prefix = api/users/:id/events
router.route('/').post(createEvent);

module.exports = router;