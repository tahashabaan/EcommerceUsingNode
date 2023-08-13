const asyncHandler = require('express-async-handler');
const User = require('../modlas/userModal');



exports.addAdressToUser = asyncHandler(async(req, res, next) => {

    const resu  = await User.findByIdAndUpdate(req.usre._id,{
        $addToSet:{address:req.body}
    },{new:true})

})