const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const protect = require('../middlewares/adminAuthMiddleware')
const dotenv = require('dotenv').config()

const Admins = require('../models/AdminsModel')

const JWT_SECRET = process.env.JWT_SECRET

router.get('/', protect, async (req, res) => {

    const user = await Admins.find({ user: req.user.id })
    if (!user) {
        return res.status(401).json({ message: "You are not allowed" })
    }
    res.status(200).json(user)
})

router.post('/register', async (req, res) => {
    const { name, email, password, image } = req.body

    if (!name || !email || !password) {
        return res.status(401).json({ message: "Please fill all Field" })
    }

    const userExists = await Admins.findOne({ email })

    if (userExists) {
        return res.status(401).json({ message: "User already exist" })
    }

    // Genarate Salt
    const salt = await bcrypt.genSalt(10)

    // Hashing Password
    const hashedPassword = await bcrypt.hash(password, salt)

    // Creating user
    const user = await Admins.create({
        name: name,
        email: email,
        password: hashedPassword,
        image: image
    })

    if (user) {
        res.status(200).json({
            user,
            token: genarateToken(user.id)
        })
    } else {
        res.status(401).json({ message: "Some error occurs" })
    }
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({ message: "Please Enter all fields" })
    }

    const user = await Admins.findOne({ email })

    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({
            user,
            token: genarateToken(user.id)
        })
    }
    else {
        res.status(401).json({ message: "Invalid Credential" })
    }
})

const genarateToken = (id) => {
    return jwt.sign({ id }, JWT_SECRET)
}

module.exports = router