require("dotenv").config();
const express = require("express");
const cors = require('cors');
const { handleServerErrors } = require("./errors");
const authRoutes = require("./routes/auth");
const eventsRoutes = require("./routes/events");
const { loginRequired, ensureIsAuthorised } = require('./middleware/auth');
const { db } = require("./models");

const app = express();
const PORT = 8081;
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes)
app.use("/api/users/:id/events", loginRequired, ensureIsAuthorised, eventsRoutes)

app.get("/api/events", async function (req, res, next) {
    try {
        let events = await db.eventNames.Event.find().sort({ title });
        return res.status(200).json(events);
    } catch (err) {
        return next(err);
    }
})

app.all("*", (req, res) => {
    res.status(404).send({ msg: "path not found" });
});

app.use(handleServerErrors);

app.listen(PORT, function () {
    console.log(`server is starting on port ${PORT}`)
})

module.exports = app;