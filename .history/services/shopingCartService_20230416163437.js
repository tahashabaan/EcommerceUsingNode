const asyncHandler = require('express-async-handler');
const shopingCart= require('../modlas/shopingCartModal');
const product= require('../modlas/productModal');



exports.addProductToShopingCart = asyncHandler( async(req, res, next) =>{
   const {productId,quantity, color } = req.body;
    const {price} = await product.findById(productId)
    let items =   await shopingCart.findOne({user: req.user._id});

    if(!items) {
      items = await shopingCart.create({
        user:req.user._id,
        cartItems:[{product:productId, price, color}]
      })
    } else {
      const cartItemIsFound =items.cartItems.findIndex(item => item.product.toString() === productId && item.color === color) 
      if(cartItemIsFound>-1) {
        //  items.cartItems[cartItemIsFound].quantity +=1;
        const cartItem =  items.cartItems[cartItemIsFound];
        cartItem.quantity +=1;
        items.cartItems[cartItemIsFound]= cartItem;
     } else{
        items.cartItems.push({product:productId, price, color})
     }   
    }

    let totalPrice=0;

    totalPrice=items.cartItems.reduce(
        (accumulator, currentValue) => ,
      0
      );

      console.log(totalPrice)


    await items.save();
     res.status(201).json({
        status:true,
        message:'product added to your cart',
        data:items
    })
})