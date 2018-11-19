var express = require('express')
var app = express()
var routes = require("./route/routes")
var plantRoutes = require("./route/plantRoutes")
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

var uploadRoute = require('./fileupload')


var constants = require("./constants/constant")






mongoose.connect(constants.BASE_URL,
    {
        // useMongoClient: true
    })

app.use(bodyParser.json())

routes(app)
uploadRoute(app)
plantRoutes(app)



app.use((err, req, res, next) => {

    console.log(err.message)

    res.send(err.message)
    next()
})


module.exports = app
