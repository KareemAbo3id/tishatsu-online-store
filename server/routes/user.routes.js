/// 📝 NOTES
/// all routers below contains http methods and controllers from controllers files,
/// by format of:
/// router.method(api_path_name, controller_name)
///______________________________________

// 👉 INITIAL IMPORTS:
import express from 'express';
import { userLogin } from '../controllers/user/auth.ctrl.js';
import { userSignup } from '../controllers/user/signup.ctrl.js';
import { getProfile, putProfile } from '../controllers/user/profile.ctrl.js';
import { userLogout } from '../controllers/user/logout.ctrl.js';
import { protectRoute } from '../middlewares/auth.mw.js';

// ⚙️ INITIATE EXPRESS ROUTER:
const router = express.Router();

// 👇 USER NEW SIGN UP CONTROLLER:
// @desc - POST | /api/users
// @access - public
router.post('/', userSignup);

// 👇 USER AUTHENTICATION & TOKEN ROUTER:
// @desc - POST | /api/users/auth
// @access - public
router.post('/auth', userLogin);

// 👇 USER GET PROFILE CONTROLLER:
// @desc - GET | /api/users/profile
// @access - Private
router.get('/profile', protectRoute, getProfile);

// 👇 USER UPDATE PROFILE CONTROLLER:
// @desc - PUT | /api/users/profile
// @access - Private
router.put('/profile', protectRoute, putProfile);

// 👇 USER LOGOUT CONTROLLER:
// @desc - POST | /api/users/logout
// @access - public
router.post('/logout', userLogout);

//__________________________________
export default router;
