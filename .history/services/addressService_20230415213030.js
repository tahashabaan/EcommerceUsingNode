const asyncHandler = require('express-async-handler');
const User = require('../modlas/userModal');



exports.addAdressToUser = asyncHandler(async(req, res, next) => {

    const user  = await User.findByIdAndUpdate(req.usre._id,{
        $addToSet:{address:req.body}
    },  {new:true})

    console.log(result)

    res.status(200).json({
        status: 'success',
        message: 'Product added successfully to your wishlist.',
        data: user.wishlist,
      });

})

exports.addAdressToUser = asyncHandler(async(req, res, next) => {

    const user  = await User.findByIdAndUpdate(req.usre._id,{
        $addToSet:{address:req.body}
    },  {new:true})

    console.log(result)

    res.status(200).json({
        status: 'success',
        message: 'Product added successfully to your wishlist.',
        data: user.wishlist,
      });

})