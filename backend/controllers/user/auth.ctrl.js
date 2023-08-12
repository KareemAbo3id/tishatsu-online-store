import asyncHandler from 'express-async-handler';
import UserModel from '../../models/users.model.js';
import generateToken from '../../utilities/token.util.js';

// 👇 USER AUTHENTICATION CONTROLLER:
// @desc - POST | /API/USERS/AUTH
// @access - public
export const userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // find user by email:
  const user = await UserModel.findOne({ email });

  // if user not found:
  if (!user) {
    res.status(404);
    throw new Error('no such user exists, please check your email');
  }

  // console.log(existedUser);

  // if: existedUser password is correct:
  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  }

  // else: email or password is incorrect (unauthorized):
  else {
    res.status(401);
    throw new Error('invalid email or password');
  }
});
