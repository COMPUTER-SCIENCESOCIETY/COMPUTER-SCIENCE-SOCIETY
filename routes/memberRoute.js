import express from "express";
const router = express.Router();
import {
  getallposts,
  getEventCodSch,
  getTechnicalUser,
  getSponserUser,
  getSportUser,
  getHeadUser,
} from "../controller/memberController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/getheadmember").get(getHeadUser);
router.route("/getcreativemember").get(getallposts);
router.route("/geteventcodinator").get(getEventCodSch);
router.route("/gettechnicalmember").get(getTechnicalUser);
router.route("/getsponsormember").get(getSponserUser);
router.route("/getsportmember").get(getSportUser);
export default router;
