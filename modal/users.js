const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ModalUses = new Schema({
    phone: String,
    password: String,
    
}, { timestamps: true }, { collection: "users" })
module.exports = mongoose.model("users", ModalUses)