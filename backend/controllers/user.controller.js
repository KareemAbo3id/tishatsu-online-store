/// 📝 NOTES
/// all funcs (controller) below contains the logic that being used in routes files,
/// by format of:
/// const controller_name = asyncHandler(async(req,res) => {
///    all the logic ...
/// });
///______________________________________

// 👉 the use of express-async-handler is preventing from using try-catch block.
import asyncHandler from 'express-async-handler';

// 👇 USER NEW SIGN UP CONTROLLER:
// @desc - POST | /api/users | sign up a new user
// @access - public
const userSignUp = asyncHandler(async (req, res) => {
  res.status(200).json({ message: '✅ User Signed Up successfully!!' });
});

// 👇 USER AUTHENTICATION & TOKEN CONTROLLER:
// @desc - POST | /api/users/auth | authenticate a user and get token
// @access - public
const userAuth = asyncHandler(async (req, res) => {
  res.status(200).json({ message: '✅ User Auth Test Succeeded!!' });
});

// 👇 USER GET PROFILE CONTROLLER:
// @desc - GET | /api/users/profile | get user profile
// @access - Private
const userGetProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: '✅ User Profile!!' });
});

// 👇 USER UPDATE PROFILE CONTROLLER:
// @desc - PUT | /api/users/profile | update user profile
// @access - Private
const userUpdateProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: '✅ User Update Profile!!' });
});

// 👇 USER LOGOUT CONTROLLER:
// @desc - POST | /api/users/logout | user logout
// @access - public
const userLogout = asyncHandler(async (req, res) => {
  res.status(200).json({ message: '✅ User Logged out!!' });
});

//__________________________________
export { userAuth, userSignUp, userLogout, userGetProfile, userUpdateProfile };
