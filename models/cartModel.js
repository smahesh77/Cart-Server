const moong = require('mongoose')
const db = require('../config/db')

const {Schema} = moong



const todoSchema = new Schema({
    // userId:{
    //     type: Schema.Types.ObjectId,
    //     ref: userModel.modelName,
    //     required:true
    // },
    pname: {
        type: String
    },
    pprice:{
        type: String,
        required:true,
    },
    pdesc:{
        type: String,
        required:true,
    },
})

const cartModel = db.model('cart', todoSchema)

module.exports = cartModel