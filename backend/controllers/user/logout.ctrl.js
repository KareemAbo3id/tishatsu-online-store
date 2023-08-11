import asyncHandler from 'express-async-handler';

// 👇 USER LOGOUT CONTROLLER:
// @desc - POST | /API/USERS/LOGOUT
// @access - public
export const userLogout = asyncHandler(async (req, res) => {
  // destroy user token cookie:
  res.cookie('userauthtoken', '', {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: ' User Logged Out' });
});
