var product = require('../models/plant/addPlantSchema')







module.exports = {
    addProduct: (req, res, next) => {
        var data = req.body
        product.create(data)
            .then((response) => {
                res.send(response)
            })
            .catch((err)=>{
                res.send(err)
            })
    }



}