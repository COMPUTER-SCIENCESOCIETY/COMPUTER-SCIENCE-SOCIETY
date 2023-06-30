import express from "express";
const router = express.Router();
import {
  getallposts,
  getEventCodSch,
  getTechnicalUser,
  getSponserUser,
  getSportUser,
  getHeadUser,
  headUpdate,
  creativeUpdate,
  eventCodinatorUpdate,
  TechnicalUpdate,
  sportUpdate,
  sponserUpdate,
  getLensMedia,
  lensmediaUpdate,
  getHeadUserCount,
} from "../controller/memberController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/getheadmember").get(getHeadUser);
router.route("/getheadmembercount").get(getHeadUserCount);
router.route("/getcreativemember").get(getallposts);
router.route("/geteventcodinator").get(getEventCodSch);
router.route("/gettechnicalmember").get(getTechnicalUser);
router.route("/getsponsormember").get(getSponserUser);
router.route("/getsportmember").get(getSportUser);
router.route("/getlensmedia").get(getLensMedia);
router.route('/headsocietyup/:id').patch(protect,headUpdate);
router.route('/creatativeup/:id').patch(protect,creativeUpdate);
router.route('/eventcodinatorup/:id').patch(protect,eventCodinatorUpdate);
router.route('/techincalup/:id').patch(protect,TechnicalUpdate);
router.route('/sponserup/:id').patch(protect,sponserUpdate);
router.route('/sportup/:id').patch(protect,sportUpdate);
router.route('/lensmediaup/:id').patch(protect,lensmediaUpdate);
export default router;
