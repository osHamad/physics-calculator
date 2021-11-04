const express = require('express')
const router = express.Router()


router.get('/kenimatics', (req, res) => {
    res.render('units/kenimatics/index.ejs')
})

router.get('/dynamics', (req, res) => {
    res.render('units/dynamics/index.ejs')
})


module.exports = router