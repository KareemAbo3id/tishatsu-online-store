import asyncHandler from 'express-async-handler';
import UserModel from '../../models/users.model.js';

// 👇 USER GET PROFILE CONTROLLER:
// @desc - GET | /API/USERS/PROFILE
// @access - Private
export const getProfile = asyncHandler(async (req, res) => {
  const user = {
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
    gender: req.user.gender,
  };

  res.status(200).json(user);
});

// 👇 USER UPDATE PROFILE CONTROLLER:
// @desc - PUT | /API/USERS/PROFILE
// @access - Private
export const putProfile = asyncHandler(async (req, res) => {
  const user = await UserModel.findById(req.user._id);

  // check if user exists
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.gender = req.body.gender || user.gender;

    // if user changes password:
    if (req.body.password) user.password = req.body.password;

    // saved user data:
    const updatedUser = await user.save();

    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      gender: updatedUser.gender,
    });
  }
  // else if user does not exist:
  else {
    res.status(404);
    throw new Error('User not found');
  }
});
