var authControler = require("../controler/authControler")



module.exports = (app) => {


    // authentications 
    app.post('/api/signup', authControler.signup)
    app.post('/api/login', authControler.login)

    app.get('/api/test', (req, res, next) => {
        res.send('running')
    })
}
