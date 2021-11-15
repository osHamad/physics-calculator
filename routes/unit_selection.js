const express = require('express')
const router = express.Router()


router.get('/kenimatics', (req, res) => {
    res.render('units/kenimatics/index.ejs')
})

router.get('/dynamics', (req, res) => {
    res.render('units/dynamics/index.ejs')
})

router.get('/energy', (req, res) => {
    res.render('units/energy/index.ejs')
})

router.get('/unit_conversion', (req, res) => {
    res.render('units/conversion/index.ejs')
})

module.exports = router