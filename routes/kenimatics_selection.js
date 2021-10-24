const express = require('express')
const router = express.Router()
const path = require('path')


router.get('/acceleration', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/units/kenimatics/acceleration.html'))
})

router.get('/initial_velocity', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/units/kenimatics/velocity1.html'))
})

router.get('/final_velocity', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/units/kenimatics/velocity2.html'))
})

router.get('/displacement', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/units/kenimatics/displacement.html'))
})

router.get('/time', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/units/kenimatics/time.html'))
})

module.exports = router