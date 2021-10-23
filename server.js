const express = require('express')
const app = express()
const unitRouter = require('./routes/unit_selection')

app.use("/static", express.static('./static/'))

app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/views/index.html')
})

app.use('/units', unitRouter)

app.listen(8000)