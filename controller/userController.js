import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";
import { sendEmailRegister } from "../helper/sendMail.js";

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  // const url = "12345";
  //   sendEmailRegister(email, url, "Verify your Email");
  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid Email or Password");
  }
});

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logout out" });
});

const getUserProfile = asyncHandler(async (req, res) => {
  const user = {
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
  };
  res.status(200).json(user);
});

//@desc Update user Profile
//route PUT /api/users/profile
//@access private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    (user.name = req.body.name || user.name),
      (user.email = req.body.email || user.email);
    if (req.body.password) {
      user.password = req.body.password;
    }
    const updatedUser = await user.save();
    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
    });
  } else {
    res.status(404);
    throw new Error("User not Found");
  }
});

const forgotPassword = asyncHandler(async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(500).json({ success: false, message: "Invalid Eamil" });
    }

    const url = Math.floor(Math.random() * 1000000);

    user.resetPasswordOTP = url;
    user.resetPasswordotp_expiry = Date.now() + 10 * 60 * 1000;

    await user.save();

    await sendEmailRegister(email, url, "Verify your Email");

    res.status(200).json({ success: true, message: `Otp Send To ${email}` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


const resetPassword = asyncHandler(async(req,res)=>{
  try {

    const { otp, newPassword } = req.body;

    const user = await User.findOne({
        resetPasswordOTP: otp,
        resetPasswordotp_expiry: { $gt: Date.now() }
    }).select("+password")

    if (!user) {
        res.status(200).json({ success: false, message: "Otp Expire" })
    }

    user.password = newPassword
    user.resetPasswordOTP = null
    user.resetPasswordotp_expiry = null

    await user.save()


    res.status(200).json({ success: true, message: "Password Updated" })
} catch (error) {
    res.status(500).json({
        success: false,
        message: error.message
    })
}
})

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  forgotPassword,
  resetPassword
};
