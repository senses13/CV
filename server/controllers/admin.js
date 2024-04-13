const AdminModel = require("../models/admin");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


module.exports.createAdmin = async (req, res) => {
    const { email, name, password } = req.body
    bcrypt.hash(password, 10)
       .then((hash) => {
          AdminModel.create({ email: email, name, password: hash })
             .then((user) => {
                console.log("Added successfully. ..");
                console.log(user)
                res.send(user)
             }).catch((err) => console.log(err))
       })
 }


 module.exports.loginAdmin = async (req, res) => {
    const { email, password } = req.body
    AdminModel.findOne({ email: email })
       .then((user) => {
          if (user) {
             bcrypt.compare(password, user.password, (err, response) => {
                if (response) {
                   const token = jwt.sign({ email: user.email, role: user.role, name: user.name },
                      "jwt-secret-key", { expiresIn: '1d' })
                   return res.json({ Status: 'success', role: user.role, 'token': token })
                }
                else {
                   return res.json('password incorect')
                }
             })
          }
          else {
             return res.json("No record exis")
          }
       })
 }