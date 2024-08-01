const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxLength: 600,
    },
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    }
});

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;