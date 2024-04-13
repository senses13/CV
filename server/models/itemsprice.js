const mongoose = require('')

const ItemsPriceSchema = new mongoose.Schema({

        MenShirtPrice: Number,
        MenTshirtPrice: Number,
        MenPantPrice: Number,
        MenShortsPrice: Number,
        WomenShirtPrice: Number,
        WomenTshirtPrice: Number,
        WomenPantPrice: Number,
        WomenShortsPrice: Number,
        KidsShirtPrice: Number,
        KidsTshirtPrice: Number,
        KidsPantPrice: Number,
        KidsShortsPrice: Number,
        WashPrice: Number,
        WashFoldPrice: Number,
        DryCleanPrice: Number,


})


const ItemsPriceModel = mongoose.model("itemsprice",ItemsPriceSchema)
module.exports = ItemsModel