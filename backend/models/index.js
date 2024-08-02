const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect("mongodb+srv://kashamalloy:KZWjc1yXWHbGIt64@pixelcluster.eepusja.mongodb.net/?retryWrites=true&w=majority&appName=pixelCluster")

module.exports.User = require("./user");
module.exports.Event = require('./event');