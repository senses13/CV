const mongoose = require('mongoose')

const SignupSchema = new mongoose.Schema({
 
        username: String,
        address: String,
        password: String,

})

const SignupModel = mongoose.model("signup",SignupSchema)
module.exports = SignupModel