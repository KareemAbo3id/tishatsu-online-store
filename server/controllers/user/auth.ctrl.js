import asyncHandler from 'express-async-handler';
import UserModel from '../../models/users.model.js';
import generateToken from '../../utilities/token.util.js';

// 👇 USER AUTHENTICATION CONTROLLER:
// @desc - POST | /API/USERS/AUTH
// @access - public
export const userLogin = asyncHandler(async (req, res) => {
  const { password } = req.body;

  // find user by email:
  const user = await UserModel.findOne({
    $or: [
      { email: req.body.emailOrUsername },
      { username: req.body.emailOrUsername },
    ],
  });

  // if user not found:
  if (!user) {
    res.status(404);
    throw new Error('no such user exists, please check your email');
  }

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      username: user.username,
      name: user.name,
      email: user.email,
      gender: user.gender,
    });
  }

  // else: email or password is incorrect (unauthorized):
  else {
    res.status(401);
    throw new Error('invalid email or password');
  }
});
