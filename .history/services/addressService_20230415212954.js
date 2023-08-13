const asyncHandler = require('express-async-handler');
const User = require('../modlas/userModal');



exports.addAdressToUser = asyncHandler(async(req, res, next) => {

    const result  = await User.findByIdAndUpdate(req.usre._id,{
        $addToSet:{address:req.body}
    },  {new:true})

    console.log(result)

    res.status(204).json({})

})