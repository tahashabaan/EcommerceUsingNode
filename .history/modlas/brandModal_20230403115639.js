const mongoose = require('mongoose');


const brandSchema = new mongoose.Schema({
    name:{
        type:String,
        nique:true,
        minLength:3,
        maxLength:14, 
    },
    slug:{
        type:String,
        lowercase:true
    },
    image:String

}, {timeseries:true})

const setIamgeUrl  = (doc) => {
    if (doc.image){
        const imageUrl =` ${process.env.BASE_URL_ENV}/brand/${doc.image}`;
        doc.image = imageUrl;
    }
}

catagorySchema.post('init', (doc) => {
    setIamgeUrl(doc)
})

catagorySchema.post('save', (doc) => {
    setIamgeUrl(doc)
})

module.exports =  mongoose.model('brand', brandSchema);