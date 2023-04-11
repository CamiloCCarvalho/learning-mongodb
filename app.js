const express = require('express')
//const checklistRouter = require('./src/routes')
require('./config/database')

const app = express()
app.use(express.json())

//app.use('/', checklistRouter)

app.listen(3000, ()=> {
    console.log('SERVER-UP | PORT: 3000 - LOG TO: [ ::1:3000/ ]')
})