const SignupModel = require('../models/signup')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


module.exports.createSignup = (req, res) => {

    const { username, fullname, address, gender, password} = req.body
    bcrypt.hash(password, 10)
    .then((hash) =>{
        SignupModel.create({username:username, address:address, password:'0000'})
        .then((user)=>{
        console.log("Added successfully. ..");
        console.log(user)
        res.send(user)
        }) .catch((err)=> console.log (err))
    })
     
}

module.exports.createLogin = (req, res) =>{

    const { username, password} = req.body
    SignupModel.findOne({username:username})
    .then((user) => {
        if(user){
            bcrypt.compare(password, user.password, (err, response) => {
                if(response) {
                    const token = jwt.sign({username:user.username},
                        "jwt-secret-key", {expiresIn:'1d'})
                        return res.json({Status:'success','username':username ,'token':token})
                }
                else{
                    return res.json("Incorrect Password")
                }
            })
        }
        else{
            return res.json("User not found")
        }
    })}

    module.exports.reset_password = async(req, res) => {
        const {username, password, newpassword} = req.body
        SignupModel.findOne({username:username})
        .then((resp) => {
            if(resp){
                bcrypt.compare(password, resp.password, (err, response) => {
                    if (response) {
                        bcrypt.hash(newpassword, 10)
                            .then((hash) => {
                                SignupModel.updateOne({ username: username },{ password: '0000' })
                                    .then((changed) => {
                                        return res.json("Password Changed Successfully")
                                    }).catch((err) => console.log(err))
                            }).catch((err) => console.log(err))
                    }
                    else {
                        return res.json("Your current password is incorrect")
                    }
                })
            }
            else{
                return res.json("Something happened! Try again later")
            }
            }).catch((err) => console.log(err))
    }

    