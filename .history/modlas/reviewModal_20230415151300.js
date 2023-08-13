const mongoose = require ('mongoose');
const Product = require('./productModal');

const reviewSchema = new mongoose.Schema({
    title:{
        type:String,
    },
    ratings:{
        type:Number,
        min:1,
        max:5,
        required:true,
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'users',
        required:true
    },
    product:{
        type:mongoose.Schema.ObjectId,
        ref:'product',
        required:true
    }

},{timestamps:true});

reviewSchema.statics.calcAverageRatingsAndQuantity = async function (productId)  {
   const result= await this.aggregate([
        {
            $match: { product: productId }
        },
        {
            $group: { _id: "product", totalQuantity: { $sum: 1}, avgRatings: { $avg: "$ratings"} }
        }
    ])

    console.log(result)

   if(result.length>0) {
      await Product.findByIdAndUpdate(productId, {
        ratingsAverage:result[0].avgRatings,
        ratingsQuantity:result[0].totalQuantity
      },{new:true})
   }
   else {
    
   }

    
}

reviewSchema.post('save', async function (next)  {
    await this.constructor.calcAverageRatingsAndQuantity(this.product);
})

reviewSchema.pre(/^find/, function(next) {
    
    this.populate({
        path: 'user',
        select: 'name profileImage',
      })

      next();
})


module.exports = mongoose.model('review', reviewSchema);