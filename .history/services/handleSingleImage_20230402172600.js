const multer  = require('multer')
const sharp = require('sharp');
const ApiError = require('../utilis/apiError');

const fileFilter = (req, file, cb ) => {
   
    if (file.mimetype.startsWith('image'))  cb(null, true)
    else  cb(new ApiError('only image allowed', 404), false)
    
 }

