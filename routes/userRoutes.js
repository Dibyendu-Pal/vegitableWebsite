const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authentication = require('../middlewares/userAuthMiddleware')
const dotenv = require('dotenv').config()

const Users = require('../models/UsersModel')
const Items = require('../models/ItemsModel')

const JWT_SECRET = process.env.JWT_SECRET

router.get('/', authentication, async (req, res) => {

    const user = await Users.findById(req.user.id)
    if (!user) {
        return res.status(401).json({ message: "You are not allowed" })
    }
    res.status(200).json({ user })
})

router.post('/register', async (req, res) => {
    const { name, email, password, image, mobileNo, address } = req.body

    if (!name || !email || !password) {
        return res.status(401).json({ message: "Please fill all Field" })
    }

    const userExists = await Users.findOne({ email })

    if (userExists) {
        return res.status(401).json({ message: "User already exist" })
    }

    // Genarate Salt
    const salt = await bcrypt.genSalt(10)

    // Hashing Password
    const hashedPassword = await bcrypt.hash(password, salt)

    // Creating user
    const user = await Users.create({
        name: name,
        email: email,
        password: hashedPassword,
        image: image,
        mobileNo: mobileNo,
        address: address
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

    const user = await Users.findOne({ email })

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

router.put('/update', authentication, async (req, res) => {

    const user = await Users.findById(req.user.id)

    if (!user) {
        res.status(400).json({ message: "User not found" })
    }

    const updatedUser = await Users.findByIdAndUpdate(req.user.id, req.body)
    res.json(updatedUser)

})
router.put('/additemtocart/:id', authentication, async (req, res) => {
    const item = await Items.findById(req.params.id)
    //  = await Users.findById(req.user.id)
    const user = await Users.findByIdAndUpdate(req.user.id, { $push: { cartItem: item } })
    // user.cartItem.push(item)
    // user.save()
    res.json(user)
})

router.delete('/deleteitemfromcart/:id', authentication, async (req, res) => {
    const item = await Items.findById(req.params.id)
    //  = await Users.findById(req.user.id)
    const user = await Users.findByIdAndUpdate(req.user.id, { $pull: { cartItem: item } }, { multi: false })
    // user.cartItem.push(item)
    // user.save()
    res.json(user)
})

router.delete('/deleteallitemsfromcart', authentication, async (req, res) => {
    const item = await Items.findById(req.params.id)
    //  = await Users.findById(req.user.id)
    const user = await Users.findByIdAndUpdate(req.user.id, { $set: { cartItem: [] } })
    // user.cartItem.push(item)
    // user.save()
    res.json(user)
})

const genarateToken = (id) => {
    return jwt.sign({ id }, JWT_SECRET)
}

module.exports = router