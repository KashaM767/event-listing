const express = require("express");
const router = express.Router({ mergeParams: true });
const { createEvent, deleteEvent } = require('../controllers/events');

// prefix = api/users/:id/events
router
    .route('/')
    .post(createEvent);

router
    .route('/:event_id')
    .delete(deleteEvent);

module.exports = router;