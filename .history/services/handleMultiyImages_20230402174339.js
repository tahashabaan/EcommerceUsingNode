const multer  = require('multer');


const fileFilter = (reg, file, cb){
    if (file.mimetype.startsWith('image'))  cb(null, true)
    else  cb(new ApiError('only image allowed', 404), false)
}

const storage = multer.memoryStorage();
const upload  = multer({storage, fileFilter})
module.exports = upload.fields([
    {name: 'imageCover' },
    
])
