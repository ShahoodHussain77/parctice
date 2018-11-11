var authControler = require("../controler/authControler")

var productControler = require('../controler/plantControler')


module.exports = (app) => {


    // authentications 
    app.post('/api/signup', authControler.signup)
    app.post('/api/login', authControler.login)




 // add plant product

    app.post('/api/plant/addItem', productControler.addProduct)
    
    
    // get all products
    app.get('/api/getAll/plantsInfo', productControler.getAllProduct)
    

    app.post('/api/delete/singleRecord' , productControler.deleteRecord)


}
