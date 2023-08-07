/// 📝 NOTES
/// all routers below contains http methods and controllers from controllers files,
/// by format of:
/// router.method(api_path_name, controller_name)
///______________________________________

// 👉 INITIAL IMPORTS:
import express from 'express';
import {
  userAuth,
  userGetProfile,
  userLogout,
  userSignUp,
  userUpdateProfile,
} from '../controllers/user.controller.js';

// ⚙️ USER ROUTES:
const u_route = {
  base: '/',
  auth: '/auth',
  profile: '/profile',
  logout: '/logout',
};

// ⚙️ INITIATE EXPRESS ROUTER:
const router = express.Router();

// 👇 USER NEW SIGN UP CONTROLLER:
// @desc - POST | /api/users | sign up a new user
// @access - public
router.post(u_route.base, userSignUp);

// 👇 USER AUTHENTICATION & TOKEN ROUTER:
// @desc - POST | /api/users/auth | authenticate a user and get token
// @access - public
router.post(u_route.auth, userAuth);

// 👇 USER GET PROFILE CONTROLLER:
// @desc - GET | /api/users/profile | get user profile
// @access - Private
router.get(u_route.profile, userGetProfile);

// 👇 USER UPDATE PROFILE CONTROLLER:
// @desc - PUT | /api/users/profile | update user profile
// @access - Private
router.put(u_route.profile, userUpdateProfile);

// 👇 USER LOGOUT CONTROLLER:
// @desc - POST | /api/users/logout | user logout
// @access - public
router.post(u_route.logout, userLogout);

//__________________________________
export default router;
