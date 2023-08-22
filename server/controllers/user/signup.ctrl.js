import asyncHandler from 'express-async-handler';
import UserModel from '../../models/users.model.js';
import generateToken from '../../utilities/token.util.js';

// 👇 USER NEW SIGN UP WITH JWT CONTROLLER:
// @desc - POST | /API/USERS
// @access - public
export const userSignup = asyncHandler(async (req, res) => {
  // user model keys:
  const { name, username, email, password, gender } = req.body;

  // check if user exists:
  const isUserExists = await UserModel.findOne({
    $or: [
      { email: req.body.emailOrUsername },
      { username: req.body.emailOrUsername },
    ],
  });

  if (isUserExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  // create new user:
  const user = await UserModel.create({
    name,
    username,
    email,
    password,
    gender,
  });

  // if: user created successfully:
  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      username: user.username,
      email: user.email,
      gender: user.gender,
    });
  }

  // else: user NOT created:
  else {
    res.status(400);
    throw new Error('Something went wrong!!, Invalid user data!!');
  }
});
