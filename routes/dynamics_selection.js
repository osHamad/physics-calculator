const express = require('express')
const router = express.Router()


router.get('/mass', (req, res) => {
    res.render('units/dynamics/mass.ejs')
})

router.get('/acceleration', (req, res) => {
    res.render('units/dynamics/acceleration.ejs')
})

router.get('/force', (req, res) => {
    res.render('units/dynamics/force.ejs')
})

router.get('/force_normal', (req, res) => {
    res.render('units/dynamics/force_normal.ejs')
})

router.get('/force_friction', (req, res) => {
    res.render('units/dynamics/force_friction.ejs')
})

router.get('/friction_coefficient', (req, res) => {
    res.render('units/dynamics/friction_coefficient.ejs')
})

router.get('/gravity', (req, res) => {
    res.render('units/dynamics/gravity.ejs')
})

router.get('/radius', (req, res) => {
    res.render('units/dynamics/radius.ejs')
})

router.get('/mass_one', (req, res) => {
    res.render('units/dynamics/mass1.ejs')
})

router.get('/mass_two', (req, res) => {
    res.render('units/dynamics/mass2.ejs')
})

module.exports = router