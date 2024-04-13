const mongoose =require('mongoose')

const adminSchema = new mongoose.Schema({
    name:String,
    email:String,
    password: String,
    role :{
        type:String,
        default :"admin"
    }

})

const AdminModel =mongoose.model("admin",adminSchema)
module.exports = AdminModel