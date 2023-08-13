const mongoose = require('mongoose');

// schame using
const catagorySchema = mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required
        minLength:3,
        maxLength:14, 
    },
    slug:{
        type:String,
        lowercase:true
    },
    image:String

},{timestamps:true})

const setIamgeUrl  = (doc) => {
    if (doc.image){
        const imageUrl =` ${process.env.BASE_URL_ENV}/catagory/${doc.image}`;
        doc.image = imageUrl;
    }
}

catagorySchema.post('init', (doc) => {
    setIamgeUrl(doc)
})

catagorySchema.post('save', (doc) => {
    setIamgeUrl(doc)
})
const catagoryModal = mongoose.model('catagory', catagorySchema);

module.exports = catagoryModal;