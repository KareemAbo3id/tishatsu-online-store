/// 📝 NOTES
/// all routers below contains http methods and controllers from controllers files,
/// by format of:
/// router.method(api_path_name, controller_name)
///______________________________________

// 👉 INITIAL IMPORTS:
import express from 'express';
import { userAuth } from '../controllers/user/auth.ctrl';
import { userSignup } from '../controllers/user/signup.ctrl';
import { getProfile, putProfile } from '../controllers/user/profile.ctrl';
import { userLogout } from '../controllers/user/logout.ctrl';

// ⚙️ INITIATE EXPRESS ROUTER:
const router = express.Router();

// 👇 USER NEW SIGN UP CONTROLLER:
// @desc - POST | /API/USERS
// @access - public
router.post('/', userSignup);

// 👇 USER AUTHENTICATION & TOKEN ROUTER:
// @desc - POST | /API/USERS/AUTH
// @access - public
router.post('/auth', userAuth);

// 👇 USER GET PROFILE CONTROLLER:
// @desc - GET | /API/USERS/PROFILE
// @access - Private
router.get('/profile', getProfile);

// 👇 USER UPDATE PROFILE CONTROLLER:
// @desc - PUT | /API/USERS/PROFILE
// @access - Private
router.put('/profile', putProfile);

// 👇 USER LOGOUT CONTROLLER:
// @desc - POST | /API/USERS/LOGOUT
// @access - public
router.post('/logout', userLogout);

//__________________________________
export default router;
