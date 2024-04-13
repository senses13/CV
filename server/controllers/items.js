const ItemsModel=require('../models/items')

module.exports.Items = (req, res) => {

    const { username, menshirt, mentshirt, menpant, menshorts, womenshirt, womentshirt, womenpant, womenshorts, kidsshirt, kidstshirt, kidspant, kidsshorts, wash, fold, dryclean} = req.body
    
        ItemsModel.create({UserName:username, MenShirt:menshirt, MenTshirt:mentshirt, MenPant:menpant, MenShorts:menshorts, WomenShirt:womenshirt, WomenTshirt:womentshirt, WomenPant:womenpant, WomenShorts:womenshorts, KidsShirt:kidsshirt, KidsTshirt:kidstshirt, KidsPant:kidspant, KidsShorts:kidsshorts, Wash:wash, Fold:fold, DryClean:dryclean })
        .then((user)=>{
        console.log("Checkout successfully. ..");
        console.log(user)
        res.send(user)
        }) .catch((err)=> console.log (err))
    
     
}
