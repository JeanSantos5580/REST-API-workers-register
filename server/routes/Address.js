const express = require('express')
const { Address } = require('../models');
const { where } = require('sequelize');

const router = express.Router()

router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

module.exports = router