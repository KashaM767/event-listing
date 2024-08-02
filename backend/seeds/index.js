const mongoose = require("mongoose");
const { db } = require("../models");
const { Event, User } = require("../models/index");
const events = require("./events");
const users = require('./users');

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

const userSeedDB = async () => {
    await User.deleteMany({})
    for (let user of users) {
        const newUser = new User({
            email: user.email,
            username: user.username,
            password: user.password,
            admin: user.admin,
        })
        await newUser.save()
    }
}

seedDB()
userSeedDB()