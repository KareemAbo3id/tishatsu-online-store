import asyncHandler from 'express-async-handler';
// import UserModel from '../../models/users.model.js';
// import generateToken from '../../utilities/token.util.js';

// 👇 USER LOGOUT CONTROLLER:
// @desc - POST | /API/USERS/LOGOUT
// @access - public
export const userLogout = asyncHandler(async (req, res) => {
  // destroy user token cookie:
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: ' User Logged Out' });
});
