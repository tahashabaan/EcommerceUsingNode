const multer  = require('multer')
const sharp = require('sharp');
const ApiError = require('../utilis/apiError');

const fileFilter = (req, file, cb ) => {
   
    if (file.mimetype.startsWith('image'))  cb(null, true)
    else  cb(new ApiError('only image allowed', 404), false)
    
    //   const fileTypes = /jpeg|jpg|png|gif|svg/;
    //   const extName =fileTypes.test(path.extname(file.originalname).toLowerCase());
    //   const mimeType = fileTypes.test(file.mimetype);
    
    //   if(extName && mimeType) cb(null, true)
    //   else cb(null, false)  
 }

