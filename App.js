var express = require('express')
var app = express()
var routes = require("./route/routes")
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

var uploadRoute = require('./fileupload')
// mongodb://check:shahood123@ds157923.mlab.com:57923/plantsdb
mongoose.connect('mongodb://check:shahood123@ds157923.mlab.com:57923/plantsdb',
    {
        // useMongoClient: true
    })

app.use(bodyParser.json())

routes(app)
uploadRoute(app



)
app.use((err, req, res, next) => {

    console.log(err.message)

    res.send(err.message)
    next()
})


module.exports = app
