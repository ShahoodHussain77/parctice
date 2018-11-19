const mongoose = require("mongoose")
const Schema = mongoose.Schema

const historySchema = new Schema({
    //edited product tran id 
    tranId: {
        type: String,
        required: true
    },
    historyDetails: [{}]
})
const history = mongoose.model("history", historySchema)
module.exports = history