const express = require("express");
const router = express.Router({ mergeParams: true });
const { createEvent, deleteEvent, allEvents } = require('../controllers/events');

router
    .route('/events')
    .get(allEvents);

// prefix = api/users/:id/events
router
    .route('/')
    .post(createEvent);

router
    .route('/:event_id')
    .delete(deleteEvent);



module.exports = router;