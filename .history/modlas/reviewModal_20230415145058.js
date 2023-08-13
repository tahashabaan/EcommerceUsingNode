const mongoose = require ('mongoose');

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

reviewSchema.statics.calcAverageRatingsAndQuantity = async() => {
  const result= await this.aggregate([
        {
            $match: { product: "product" }
        },
        {
            $group: { _id: "product", totalQuantity: { $sum: 1}, avgRatings: { $avg: "$ratings"} }
        }

    ])

    console.log(result)
}

reviewSchema.post('save', async function (next)  {
    await this.constructor.calcAvgAndQuantity();
})
reviewSchema.pre(/^find/, function(next) {
    
    this.populate({
        path: 'user',
        select: 'name profileImage',
      })

      next();
})


module.exports = mongoose.model('review', reviewSchema);