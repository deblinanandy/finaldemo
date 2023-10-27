import Router  from "express";

import Admincontrolle from "../controller/Admincontroller.js";
import Adminloging from "../controller/Adminloging.js";

import deleteAllLoginDetails from "../controller/cleanLoginFormData .js";
import checkinController from "../controller/checkinController.js";
import getAllCheckdetails from "../controller/getAllCheckdetails.js";
import deleteCheck from "../controller/deleteCheck.js";
import userController from "../controller/userController.js";

import showallLogingdetailsh from "../controller/showallLogingdetailsh.js";
import findAllUsers from "../controller/findAllUsers.js";
import {
  createNotice,
  getAllNotices,
  getNoticeById,
  updateNotice,

} from '../controller/createNotice.js'; // Import your controller functions

const router = Router();

router.get('/', (req, res) => {
   res.send(`<h3>Login app routing</h3>`);

})

router.post('/adminregister', Admincontrolle);
router.post('/adminlog', Adminloging);
router.post('/register', userController);
router.get('/userlogdetils', showallLogingdetailsh);
router.get('/deleteuser', deleteAllLoginDetails);
router.post('/check', checkinController);
router.get('/allcheck', getAllCheckdetails);

router.delete('/delete', deleteCheck);
router.post('/notices', createNotice); // Create a new notice
router.get('/allnotices', getAllNotices); // Get all notices
router.get('/notices/:noticeId', getNoticeById); // Get a single notice by ID
router.put('/upnotices/:noticeId', updateNotice); // Update a notice by ID
router.get('/show', findAllUsers);
export default router;
