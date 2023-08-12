import asyncHandler from 'express-async-handler';
import UserModel from '../../models/users.model.js';
import generateToken from '../../utilities/token.util.js';

// 👇 USER NEW SIGN UP WITH JWT CONTROLLER:
// @desc - POST | /API/USERS
// @access - public
export const userSignup = asyncHandler(async (req, res) => {
  // user model keys:
  const { name, email, password } = req.body;

  // check if user exists:
  const isUserExists = await UserModel.findOne({ email });
  if (isUserExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  // create new user:
  const user = await UserModel.create({ name, email, password });

  // if: user created successfully:
  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  }

  // else: user NOT created:
  else {
    res.status(400);
    throw new Error('Something went wrong!!, Invalid user data!!');
  }
});
