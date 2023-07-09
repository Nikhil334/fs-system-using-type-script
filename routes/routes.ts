import express,{Request,Response} from 'express';
const router = express.Router();
import homecontroller from '../controllers/home';
import uploadcontroller from '../controllers/upload';
import uploadmiddleware from '../middleware/multermiddleware';
import mergecontroller from '../controllers/mergecontroller';
import displaycontroller from '../controllers/displaycontroller';
import deletecontroller from '../controllers/deletecontroller';
const newfilepath:string = `./backup/Text_${Date.now()}.txt`;

router.route("/").get(homecontroller);
router.route("/upload").post(uploadmiddleware,uploadcontroller);
router.route("/merge/:no1/:no2").post(mergecontroller);
router.route("/display").get(displaycontroller);
router.route("/delete/:no1/:no2").delete(deletecontroller);

export {router};
export default newfilepath;