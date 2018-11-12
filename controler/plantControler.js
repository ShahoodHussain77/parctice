var product = require('../models/plant/addPlantSchema')
var history = require('../models/plant/historySchema')



module.exports = {
    addProduct: (req, res, next) => {
        var data = req.body





         if (data.tranType === 'ADD') {
            console.log(data.tranType)

            product.create(data)
                .then((response) => {
                    if (response !== null) {
                        var objId = response._id.toString()
                        var tranid = objId.slice(objId.length - 5)
                        product.findByIdAndUpdate({ _id: response._id }, { $set: { tranId: tranid } }, function (err, doc) {
                            if (err) {
                                res.send({ message: 'Error', response: false, })
                            }
                            res.send(doc)
                        })
                    }
                    // res.send(response)
                })
                .catch((err) => {
                    res.send(err)
                })

        }

        


       if (data.tranType === 'EDIT') {
            console.log('EDIT')
            product.findOneAndUpdate({ tranId: data.tranId }, { $set: data }, function (err, found) {
                if (found) {
                    const recordId = data.tranId
                    const record = data

                    history.findOne({ tranId: recordId }, (isNoRecord, isRecord) => {
                        if (isRecord) {
                            console.log('mil gaya create nai karo')
                            history.findOneAndUpdate({ tranId: recordId }, { $push: { historyDetails: record } }, (notFound, find) => {
                                if (find) {
                                    console.log('pushed')
                                    res.send(data)
                                }
                            })
                        }
                        else {
                            console.log('create krna pary gi histrory')
                            history.create({ tranId: recordId, historyDetails: record })
                                .then((results) => {
                                    res.send(results)
                                })
                                .catch((error) => {
                                    res.send(error)
                                })
                        }
                    })
                }
                else {
                    console.log('not found')
                }

                if (err) {
                    res.send({ error: 'no record found' })
                }
            })
        }
        
        if (data.tranType === 'EDIT') {
          
            product.findOneAndUpdate({ tranId: data.tranId }, { $set: data }, function (err, found) {
                if (found) {
                    const recordId = data.tranId
                    const record = data

                    history.findOne({ tranId: recordId }, (isNoRecord, isRecord) => {
                        if (isRecord) {
                            console.log('mil gaya create nai karo')
                            history.findOneAndUpdate({ tranId: recordId }, { $push: { historyDetails: record } }, (notFound, find) => {
                                if (find) {
                                    
                                    res.send(data)
                                }
                            })
                        }
                        else {
                            console.log('create krna pary gi histrory')
                            history.create({ tranId: recordId, historyDetails: record })
                                .then((results) => {
                                    res.send(results)
                                })
                                .catch((error) => {
                                    res.send(error)
                                })
                        }
                    })
                }
                else {
                    console.log('not found')
                }

                if (err) {
                    res.send({ error: 'no record found' })
                }
            })
        }





    },

    // get all 
    getAllProduct: (req, res, next) => {

        product.find()
            .then((response) => {
                res.send(response)
            })
            .catch((err) => {
                res.send(err)
            })
    },



    deleteRecord: (req, res, next) => {
        // tran id ki base pay image and record delete krna hai 
        var id = req.body.tranId
        product.findOneAndDelete({ tranId: id }, (err, found) => {
            if (found) {
                res.send({ delete: true })
            }
            else {
                res.send({ delete: false })
            }
            if (err) {
                res.send(err)
            }
        })
    }

}


