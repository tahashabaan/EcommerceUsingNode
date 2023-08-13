const asyncHandler = require('express-async-handler');
const User = require('../modlas/userModal');



exports.addAdressToUser = asyncHandler(async(req, res, next) => {

    const user  = await User.findByIdAndUpdate(req.usre._id,{
        $
    },{new:true})

})