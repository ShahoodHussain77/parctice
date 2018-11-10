const mongoose = require("mongoose")
const Schema = mongoose.Schema


const sizes = new Schema({

    // pot or shopper
    typeof: {
        type: String,
        required: true
    },

    // shoper size or pot size
    Size: {
        type: String,
        required: true

    }

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
    totalQty: {
        type: String,
        required: true,
    },
    availableQty: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    shotDescription: {
        type: String,
        required: true,
    },
    pricePerItem: {
        type: String,
        required: true,
    },

    recordCreateDate: {
        type: String,
        required: true,
    },

    potSizes: {
        type: [sizes]
    },
    shopperSizes: {
        type: [sizes]
    },

})


const product = mongoose.model("Products", addProduct)
module.exports = product


