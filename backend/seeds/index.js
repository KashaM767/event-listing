const mongoose = require("mongoose");
const { db } = require("../models");
const { Event } = require("../models/index")
const events = require("./events")

const seedDB = async () => {
    await Event.deleteMany({})
    for (let event of events) {
        const newEvent = new Event({
            title: event.title,
            description: event.description,
            user: event.user,
            date: event.date,
            time: event.time
        })
        await newEvent.save()
    }
}

seedDB()