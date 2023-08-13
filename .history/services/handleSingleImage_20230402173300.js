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

//    destination: function (req, file, cb) {
//      cb(null, 'uploads/catagory'); 
//    },
//    filename:function (req, file, cb) {
//       const ext = file.mimetype.split('/')[1];
//       const uniqueFilename = `catagory-${Math.round(Math.random()*1E9)}-${Date.now()}.${ext}`
//       cb(null, uniqueFilename);
//       console.log(file) 
//       console.log(req.body)
//     }
// })
//   const fileTypes = /jpeg|jpg|png|gif|svg/;
    //   const extName =fileTypes.test(path.extname(file.originalname).toLowerCase());
    //   const mimeType = fileTypes.test(file.mimetype);
    
    //   if(extName && mimeType) cb(null, true)
    //   else cb(null, false)  

