
const routers = require("express");
const routes = routers()
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../assignment/src/uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now()
        cb(null, uniqueSuffix + file.originalname)
    }
})

const upload = multer({ storage: storage })

const{createSignup, createLogin, reset_password} = require('../controllers/signup')
const {profile} = require('../controllers/form')



routes.post('/Signup',createSignup)
routes.post('/login',createLogin)
routes.post('/reset_password',reset_password)
routes.post('/profile',upload.single("file"), profile)



module.exports = routes



