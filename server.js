const express = require('express')
const app = express()
const unitRouter = require('./routes/unit_selection')
const kenimaticsRouter = require('./routes/kenimatics_selection')
const dynamicsRoutes = require('./routes/dynamics_selection')
const PORT = process.env.PORT || 5000

app.set('view engine', 'ejs')
app.use("/static", express.static('./static/'))

// app.get('/', (req, res)=>{
//     res.render('index.ejs')
// })
const http=require('http')
server = http.Server(app)

// app.use('/units', unitRouter)
// app.use('/units/kenimatics', kenimaticsRouter)
// app.use('/units/dynamics', dynamicsRoutes)

server.listen(PORT, () => console.log(`Listening on ${ PORT }`))