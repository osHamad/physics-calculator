const express = require('express')
const router = express.Router()


router.get('/work', (req, res) => {
    res.render('units/energy/work.ejs')
})

router.get('/force', (req, res) => {
    res.render('units/energy/force.ejs')
})

router.get('/distance', (req, res) => {
    res.render('units/energy/distance.ejs')
})

module.exports = router