/// 📝 NOTES
/// 1: All routes for APIs included in **.routes.js files.
/// 2: All logic for every single route included in **.controller.js files.
/// 2: All functions for every single middleware included in **.middleware.js files.
///______________________________________

// 👉 INITIAL IMPORTS:
import express from 'express';
import dotenv from 'dotenv';

// 👉 ROUTES IMPORTS:
import userRoutes from './routes/user.routes.js';

// 👉 MIDDLEWARES IMPORTS:
import { errorNotFound, errorHandler } from './middlewares/error.middleware.js';

// ⚙️ CONFIG DOTENV:
dotenv.config();

// ⚙️ SERVER PORT:
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;

// ⚙️ INITIATE EXPRESS APP:
const APP = express();

// _________________________________________________________________________
// 👇 ALL APP LOGIC ________________________________________________________

// 👉 routes for /api/user API:
APP.use('/api/users', userRoutes);

// test
APP.get('/', (req, res) => {
  res.send('<h1>hello, server is running<h1/>');
});

// 👉 ALL MIDDLEWARES:
APP.use(errorNotFound);
APP.use(errorHandler);

// 👉 listen on port:
APP.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

/// 📝 NOTES
/// HTTP REQUESTS AND APIS:
/// ✅ POST | /api/users         | create a new user
/// ✅ POST | /api/users/auth    | authenticate a user and get token
/// ✅ POST | /api/users/logout  | logout a user and clear cookies
///    GET  | /api/users/profile | get a user profile
///    PUT  | /api/users/profile | update a user profile
///______________________________________
