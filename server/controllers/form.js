
const FormModel = require('../models/form')
// require('dotenv').config()
// const axios = require('axios')

const SITE_SECRET = process.env.SITE_SECRET

module.exports.profile = async (req, res) => {
    const { username, name, email, password, dob, age, gender, address, color } = req.body
    
        FormModel.findOne({ username: username })
            .then((user) => {
                if (user) {
                    return res.json("User details already present")
                }
                else {
                    const filedata = req.file.filename
                    FormModel.create({ username: username, name: name, email: email, password: password, dob: dob, age: age, gender: gender, address: address, color: color, file: filedata })
                        .then((response) => {
                            return res.json("Successfully completed")
                        }).catch((err) => console.log(err))
                }
            })

    }
    

