
const mongoose = require('mongoose')


const FormSchema = new mongoose.Schema({

    name: String,
    email: String,
    password: String,
    DOB: Date,
    age: Number,
    gender: String,
    address: String,
    color: String,
    file: String

})




const FormModel = mongoose.model("form",FormSchema)
module.exports = FormModel