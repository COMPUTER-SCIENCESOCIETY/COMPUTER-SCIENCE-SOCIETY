import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  forgotPassword,
  resetPassword
} from "../controller/userController.js";
import { protect } from "../middleware/authMiddleware.js";

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.post("/forgotpassword", forgotPassword);
router.put("/restpassword",resetPassword)
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
