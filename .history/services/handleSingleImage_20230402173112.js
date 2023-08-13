const multer  = require('multer')
const ApiError = require('../utilis/apiError');




const fileFilter = (req, file, cb ) => {
   
    if (file.mimetype.startsWith('image'))  cb(null, true)
    else  cb(new ApiError('only image allowed', 404), false)
 }

const storage = multer.memoryStorage();
const upload = multer({storage, fileFilter});
module.exports= upload.single('image');

// const storage  = multer.diskStorage({



