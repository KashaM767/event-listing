const db = require("../models");
const jwt = require("jsonwebtoken");

exports.login = function () { };

exports.signup = async function (req, res, next) {
    try {
        let user = await db.User.create(req.body);
        let { id, username, admin } = user;
        let token = jwt.sign({
            id,
            username,
            admin
        }, process.env.SECRET_KEY);
        return res.status(200).json({
            id,
            username,
            admin,
            token
        });
    } catch (err) {
        if (err.code === 11000) {
            err.message = "Sorry, that username/amd or email is taken"
        }
        return next({
            status: 400,
            message: err.message
        })
    }
};
