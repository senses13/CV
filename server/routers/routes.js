
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

const{createSignup, createLogin, reset_password, mainPage} = require('../controllers/signup')
const {profile} = require('../controllers/form');
const { Items } = require("../controllers/items");




routes.post('/Signup',createSignup)
routes.post('/login',createLogin)
routes.post('/reset_password',reset_password)
routes.post('/profile',upload.single("file"), profile)
routes.post('/mainpage/items', Items)

// admin 

const { createAdmin, loginAdmin } = require("../controllers/admin");


routes.post('/admin/signup', createAdmin)
routes.post('/admin/login', loginAdmin)
//routes.post('/admin/admindashboard',adminDashboard)
//routes.post('/admin/editprice', editPrice)





module.exports = routes

