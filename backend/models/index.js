const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
require("dotenv").config();
mongoose.connect(process.env.MONGO_URL);


module.exports.User = require("./user");
module.exports.Event = require('./event');