const express = require('express')
const router = express.Router()


router.get('/acceleration', (req, res) => {
    res.render('units/kenimatics/acceleration.ejs')
})

router.get('/initial_velocity', (req, res) => {
    res.render('units/kenimatics/velocity1.ejs')
})

router.get('/final_velocity', (req, res) => {
    res.render('units/kenimatics/velocity2.ejs')
})

router.get('/displacement', (req, res) => {
    res.render('units/kenimatics/displacement.ejs')
})

router.get('/time', (req, res) => {
    res.render('units/kenimatics/time.ejs')
})

module.exports = router