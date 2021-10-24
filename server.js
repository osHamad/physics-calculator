const express = require('express')
const app = express()
const unitRouter = require('./routes/unit_selection')
const kenimaticsRouter = require('./routes/kenimatics_selection')

app.use("/static", express.static('./static/'))

app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/views/index.html')
})

app.use('/units', unitRouter)
app.use('/units/kenimatics', kenimaticsRouter)

app.listen(8000)