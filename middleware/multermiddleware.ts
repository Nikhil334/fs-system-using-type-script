//const multer = require("multer");
import multer from 'multer';
const uploadmiddleware = multer({
    storage: multer.diskStorage({
        destination: function(req, file, cb){
            cb(null, 'uploads');
        },
        filename: function(req, file, cb){
            
            cb(null,`file${file.fieldname}.txt`);
        }
    })
}).any();

export default uploadmiddleware;

