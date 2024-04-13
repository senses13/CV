const ItemsPriceModel=require('../models/itemsprice')

module.exports.ItemsPrice = (req, res) => {

    const { menshirtprice, mentshirtprice, menpantprice, menshortsprice, womenshirtprice, womentshirtprice, womenpantprice, womenshortsprice, kidsshirtprice, kidstshirtprice, kidspantprice, kidsshortsprice, washprice, foldprice, drycleanprice} = req.body

    ItemsPriceModel.create({MenShirtPrice:menshirtprice ,MenTshirtPrice:mentshirtprice ,MenPantPrice:menpantprice ,MenShortsPrice:menshortsprice ,WomenShirtPrice:womenshirtprice ,WomenTshirtPrice:womentshirtprice ,WomenPantPrice:womenpantprice ,WomenShortsPrice:womenshortsprice ,KidsShirtPrice:kidsshirtprice ,KidsTshirtPrice:kidstshirtprice ,KidsPantPrice:kidspantprice ,KidsShortsPrice:kidsshortsprice ,WashPrice:washprice ,FoldPrice:foldprice ,DryCleanPrice:drycleanprice})
    .then((user)=>{
        console.log("added successfully. ..");
        console.log(user)
        res.send(user)
        }) .catch((err)=> console.log (err))


}



