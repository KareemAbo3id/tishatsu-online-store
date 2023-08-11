import asyncHandler from 'express-async-handler';

// 👇 USER GET PROFILE CONTROLLER:
// @desc - GET | /API/USERS/PROFILE
// @access - Private
export const getProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: '✅ User Profile!!' });
});

// 👇 USER UPDATE PROFILE CONTROLLER:
// @desc - PUT | /API/USERS/PROFILE
// @access - Private
export const putProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: '✅ User Update Profile!!' });
});
