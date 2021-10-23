const express = require('express')
const router = express.Router()
const path = require('path')


router.get('/kenimatics', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/units/kenimatics/index.html'))
})

router.get('/dynamics', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/units/dynamics/index.html'))
})


module.exports = router