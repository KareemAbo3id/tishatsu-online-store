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
// @desc - POST | /API/USERS
// @access - public
router.post('/', userSignup);

// 👇 USER AUTHENTICATION & TOKEN ROUTER:
// @desc - POST | /API/USERS/AUTH
// @access - public
router.post('/auth', userLogin);

// 👇 USER GET PROFILE CONTROLLER:
// @desc - GET | /API/USERS/PROFILE
// @access - Private
router.get('/profile', protectRoute, getProfile);

// 👇 USER UPDATE PROFILE CONTROLLER:
// @desc - PUT | /API/USERS/PROFILE
// @access - Private
router.put('/profile', protectRoute, putProfile);

// 👇 USER LOGOUT CONTROLLER:
// @desc - POST | /API/USERS/LOGOUT
// @access - public
router.post('/logout', userLogout);

//__________________________________
export default router;
