const mongoose = require('mongoose');
const User = require('./user');

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
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
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

eventSchema.pre('remove', async function (next) {
    try {
        let user = await User.findById(this.user);
        user.events.remove(this.id);
        await user.save();
        return next();
    } catch (err) {
        return next(err);
    }
})

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;