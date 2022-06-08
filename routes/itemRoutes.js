const express = require('express')
const router = express.Router()
const protect = require('../middlewares/adminAuthMiddleware')

const Items = require('../models/ItemsModel')

router.get('/', async (req, res) => {
    // const items = await Items.find({ user: req.user.id })
    const items = await Items.find()
    res.json(items)
})

router.post('/', protect, async (req, res) => {
    const { name, category, description, image, price } = req.body
    if (!name || !category || !price) {
        res.status(400).json({ message: "Please add all Fields" })
    }

    const item = await Items.create({
        name, category, description, image, price
    })

    res.json(item)
})

router.put('/:id', protect, async (req, res) => {

    const item = await Items.findById(req.params.id)

    if (!item) {
        res.status(400).json({ message: "Item not found" })
    }

    const updatedItem = await Items.findByIdAndUpdate(req.params.id, req.body)
    res.json(updatedItem)

})

router.delete('/:id', protect, async (req, res) => {
    const item = await Items.findById(req.params.id)

    console.log(item)
    if (!item) {
        return res.status(400).json({ message: "Item not found" })
    }

    if (item.user == req.user.id) {
        item.remove()
        res.json({ message: `Delete Items of id ${req.params.id}` })
    }
    else {
        res.status(401).json({ message: "You are not allowed" })
    }
})


module.exports = router
