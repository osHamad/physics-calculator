const express = require('express')
const router = express.Router()


router.get('/unit_conversion', (req, res) => {
    res.render('units/other/unit_conversion.ejs')
})

module.exports = router