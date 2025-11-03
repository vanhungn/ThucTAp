const mongoose = require('mongoose')
const Schema = mongoose.Schema  
const Client = new Schema({
    img:String,
    nameSupplier:String,
    phone:String,
    initialDebt:Number,
    debt:Number,
    area:String,
    address:String,
    birthday:Date,
    email:String,
    taxCode:Number,
    account:String,
    isSupplier:Boolean
}, { timestamps: true }, { collection: "clients" })
module.exports = mongoose.model("clients",Client)