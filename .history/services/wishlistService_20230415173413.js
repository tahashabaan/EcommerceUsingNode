const asyncHandler = require('express-async-handler');
const product = require('../modlas/productModal');


// @desc   del a  product from database
// @route  del api/v1/wishlist
// @acess  private
exports.addProductToWishList = asyncHandler( async(req, res, next) => {

   const user =  await product.findByIdAndUpdate(req.user._id,{ 
     $addToSet: { wishlist:req.body.productId }  },
     {new: true}   )

    res.status(200).json({
        status: 'success',
        message: 'Product added successfully to your wishlist.',
        data: user.wishlist,
      });
    
})

exports.removeProductFromWishList = asyncHandler( async (req, res, next) => { 
   const user = await product.findByIdAndUpdate(req.user._id,
        { $pull: { wishlist: req.body.productId} } 
     )
     res.status(204).json({
        status: 'success',
        message: 'Product removed from your wishlist.',
        data: user.wishlist,
     })
})

exports.getLoggedUserDate =asyncHandler async (req, res, next) =>{
    const wishlist = 
}