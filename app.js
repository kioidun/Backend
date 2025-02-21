const express = require("express")
const bodyParser = require('body-parser')

const app = express()

const servicesRoute = require('./routes/services')
const tribunalServicesRoute = require('./routes/tribunalServices')
const tribunals = require('./routes/tribunals')

app.use(bodyParser.json())
app.use('/services',servicesRoute)
app.use('/tribunalServices',tribunalServicesRoute)
app.use('/tribunals',tribunals)



module.exports = app