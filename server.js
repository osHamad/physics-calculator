const express = require('express')
const app = express()
const unitRouter = require('./routes/unit_selection')
const kenimaticsRouter = require('./routes/kenimatics_selection')

app.set('view engine', 'ejs')
app.use("/static", express.static('./static/'))

app.get('/', (req, res)=>{
    res.render('index.ejs')
})

app.use('/units', unitRouter)
app.use('/units/kenimatics', kenimaticsRouter)

app.listen(8000)