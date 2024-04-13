const mongoose = require('mongoose')

const ItemsSchema = new mongoose.Schema({
 
    
        UserName: String,
        MenShirt: Number,
        MenTshirt: Number,
        MenPant: Number,
        MenShorts: Number,
        WomenShirt: Number,
        WomenTshirt: Number,
        WomenPant: Number,
        WomenShorts: Number,
        KidsShirt: Number,
        KidsTshirt: Number,
        KidsPant: Number,
        KidsShorts: Number,
        Wash: Number,
        Fold: Number,
        DryClean: Number,

})

const ItemsModel = mongoose.model("items",ItemsSchema)
module.exports = ItemsModel