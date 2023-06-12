import express from "express";
const router = express.Router();
import { createEvent,getallEvent } from "../controller/eventController.js";

import { protect } from "../middleware/authMiddleware.js";

router.route("/createevent").post(protect, createEvent);
router.route("/getallevent").get(getallEvent);
export default router;
