import asyncHandler from 'express-async-handler';
import UserModel from '../../models/users.model';
import generateToken from '../../utilities/generate-token.utility';

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
  const newUser = await UserModel.create({ name, email, password });

  // if: user created successfully:
  if (newUser) {
    generateToken(res, newUser._id);
    res.status(201).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
    });
  }

  // else: user NOT created:
  else {
    res.status(400);
    throw new Error('Something went wrong!!, Invalid user data!!');
  }
});
