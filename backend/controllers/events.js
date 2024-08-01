const db = require("../models");

exports.createEvent = async function (req, res, next) {
    try {
        const { title, description, date, time } = req.body;
        let event = await db.Event.create({
            title,
            description,
            date,
            time,
        });
        return res.status(200).json(event);
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

exports.allEvents = async function (req, res, next) {
    try {
        let events = await db.Event.find().sort({ title: 1 })
        return res.status(200).json(events);
    } catch (err) {
        return next(err);
    }
};


