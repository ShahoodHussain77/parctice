var productControler = require('../controler/plantControler')





module.exports = (app) => {



 // add plant product

 app.post('/api/plant/addItem', productControler.addProduct)
    
    
 // get all products
 app.get('/api/getAll/plantsInfo', productControler.getAllProduct)
 
 // delete single record
 app.post('/api/delete/singleRecord' , productControler.deleteRecord)

 // get History 
 app.post('/api/getSingle/RecordHistory', productControler.getHistory)


}