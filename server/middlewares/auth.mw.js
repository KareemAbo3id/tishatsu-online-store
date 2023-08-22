import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import UserModel from '../models/users.model.js';

// 👉 PROTECT THE ROUTE:
// Asynchronous Function To protect the route when user in not authenticated:
const protectRoute = asyncHandler(async (req, res, next) => {
  let token;
  token = req.cookies.jwt;

  // check if token exists in cookies
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await UserModel.findById(decoded.userId).select('-password');
      next();
      // if token is invalid:
    } catch (error) {
      res.status(401);
      throw new Error('Not authorized, invalid token');
    }
  }

  // token not found:
  else {
    res.status(401);
    throw new Error('Not authorized, token not found');
  }
});

export { protectRoute };
