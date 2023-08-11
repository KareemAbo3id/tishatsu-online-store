/// 📝 NOTES
/// generate a json web token for every user, and store it in http only cookie.
///______________________________________

import jwt from 'jsonwebtoken';

const generateToken = (res, userID) => {
  // eslint-disable-next-line no-undef
  const token = jwt.sign({ userID }, process.env.jwt_SECRET, {
    // the token expires after 1 hour:
    expiresIn: '1h',
  });

  res.cookie('userauthtoken', token, {
    httpOnly: true,
    // eslint-disable-next-line no-undef
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 1 * 60 * 60 * 1000,
  });
};

export default generateToken;
