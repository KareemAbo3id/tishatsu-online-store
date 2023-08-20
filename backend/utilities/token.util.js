/// 📝 NOTES
/// generate a json web token for every user, and store it in http only cookie.
///______________________________________

import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  res.cookie('jwt', token, {
    httpOnly: true,
    // Use secure cookies in production
    secure: process.env.NODE_ENV !== 'development',
    // Prevent CSRF attacks
    sameSite: 'strict',
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  });
};

export default generateToken;
