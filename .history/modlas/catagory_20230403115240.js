const mongoose = require('mongoose');

// schame using
const catagorySchema = mongoose.Schema({
    name:{
        type:String,
        unique:true,
        minLength:3,
        maxLength:14, 
    },
    slug:{
        type:String,
        lowercase:true
    },
    image:String

},{timestamps:true})


catagorySchema.post('init', (doc) => {
    if (doc.image){
        const img
    }
})

const catagoryModal = mongoose.model('catagory', catagorySchema);

module.exports = catagoryModal;