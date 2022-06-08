// Middleware is a function that runs during the request responce cycle

const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config()

const Admins = require('../models/AdminsModel')

const JWT_SECRET = process.env.JWT_SECRET

const protect = async (req, res, next) => {
    try {
        const token = req.header("Authorization");
        if (!token) {
            return res.status(403).send("Access denied.")
        }

        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = await Admins.findById(decoded.id).select('-password')
        next();
    } catch (error) {
        res.status(400).json({ message: "Invalid token" });
    }
}

module.exports = protect