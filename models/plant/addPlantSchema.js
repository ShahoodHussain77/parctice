const mongoose = require("mongoose")
const Schema = mongoose.Schema


const sizes = new Schema({

    // pot or shopper
    typeof: {
        type: String,
        required: true
    },

    // shoper size or pot size
    size: {
        type: String,
        required: true

    },
    price:{
        type: String,
        required: true

    },
    qty:{
        type: String,
        required: true

    },
    

})



const imageObj = new Schema({
    fieldname: String,
    originalname: String,
    encoding: String,
    mimetype: String,
    id: String,
    filename: String,
    bucketName: String,
    md5: String,
    uploadDate: String,
    contentType: String
})




const addProduct = new Schema({

    // product image
    imagePath: [imageObj],

    isActive: {
        type: Boolean,
    },
    description: {
        type: String,
        // required: true,
    },
    shortDescription: {
        type: String,
        // required: true,
    },
    creadedDate: {
        type: String,
        required: true,
    },
    potSizes: {
        type: [sizes]
    },
    shopperSizes: {
        type: [sizes]
    },
    productName:{
        type: String,
        required: true
    },

    tranType: {
        type: String,
        required: true
    },
    tranId: {
        type: String
    },

})


const product = mongoose.model("Products", addProduct)
module.exports = product
