import asyncHandler from 'express-async-handler';
import UserModel from '../../models/users.model';
import generateToken from '../../utilities/generate-token.utility';

// 👇 USER AUTHENTICATION CONTROLLER:
// @desc - POST | /API/USERS/AUTH
// @access - public
export const userAuth = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // find user by email:
  const existedUser = await UserModel.findOne({ email });

  // if user not found:
  if (!existedUser) {
    res.status(404);
    throw new Error('no such user exists, please check your email');
  }

  // if: existedUser password is correct:
  if (existedUser && (await existedUser.matchPassword(password))) {
    generateToken(res, existedUser._id);
    res.status(201).json({
      _id: existedUser._id,
      name: existedUser.name,
      email: existedUser.email,
    });
  }

  // else: email or password is incorrect (unauthorized):
  else {
    res.status(401);
    throw new Error('invalid email or password');
  }
});
