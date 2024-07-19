const db = require("../models");

exports.createEvent = async function (req, res, next) {
    try {
        let event = await db.Event.create({
            title: req.body.title,
            description: req.body.description,
            user: req.params.id
        });
        let foundUser = await db.User.findById(req.params.id);
        foundUser.events.push(event.id);
        await foundUser.save();
        let foundEvent = await db.Event.findById(event._id).populate("user", {
            username: true
        });
        return res.status(200).json(foundEvent);
    } catch (err) {
        return next(err);
    }
};

exports.deleteEvent = async function (req, res, next) {
    try {
        let foundEvent = await db.Event.findById(req.params.event_id);
        await foundEvent.remove()
        return res.status(200).json(foundEvent);
    } catch (err) {
        return next(err);
    }
};
