const express = require('express')
const router = express.Router()

router.get('/length', (req, res) => {
    res.render('units/conversion/length.ejs')
})

module.exports = router