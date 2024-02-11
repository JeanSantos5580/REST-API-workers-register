const express = require('express')
const { User } = require('../models')

const router = express.Router()

router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

router.post('/create', async (req, res, next) => {
    const user = req.body
    try {
        const newUser = await User.create(user)
        res.status(201).json(newUser)
    } catch (error) {
        next(error)
    }
})

router.get('/', async (req, res, next) => {
    try {
        const usersList = await User.findAll({ raw: true })
        console.log(usersList);
        res.status(201).json(usersList)
    } catch (error) {
        next(error)
    }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id

    try {
        const searchedUser = await User.findByPk(id) //find by primary key
        res.status(201).json(searchedUser)
    } catch (error) {
        next(error)
    }
})

router.post('/delete/:id', async (req, res, next) => {
    const id = req.params.id

    try {
        await User.destroy({ where: { id: id } })
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        next(error)
    }
})


module.exports = router