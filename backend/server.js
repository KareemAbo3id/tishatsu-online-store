/// 📝 NOTES
/// 1: All routes for APIs included in **.routes.js files.
/// 2: All logic for every single route included in **.controller.js files.
/// 3: All functions for every middleware included in **.middleware.js files.
/// 4: Database connection in config/db.config.js
/// 5: All mongoose Schemas objects for every model included in **.model.js files.
///______________________________________

// 👉 INITIAL IMPORTS:
import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js';
import { errorNotFound, errorHandler } from './middlewares/errors.mw.js';
import databaseInitialization from './configs/db.config.js';

// ⚙️ INITIATE THE SERVER AND CONNECT TO DATABASE:
dotenv.config();
const SERVER_PORT = process.env.PORT || 5000;
databaseInitialization();

// ⚙️ INITIATE EXPRESS APP:
const APP = express();
APP.use(express.json());
APP.use(express.urlencoded({ extended: true }));

// 👇 ALL APP LOGIC ////////////////////////////////////////

// 👉 routes for user API:
APP.use('/api/users', userRoutes);

// test
APP.get('/', (req, res) => {
  res.send('<h1>hello, server is running<h1/>');
});

// 👉 ERROR MIDDLEWARES:
APP.use(errorNotFound);
APP.use(errorHandler);

// 👉 listen on port:
APP.listen(SERVER_PORT, () =>
  console.log(`Server running on port: ${SERVER_PORT}`)
);

/// 📝 NOTES
/// HTTP REQUESTS AND APIS:
/// ✅ POST | /api/users         | create a new user
/// ✅ POST | /api/users/auth    | authenticate a user and get token
/// ✅ POST | /api/users/logout  | logout a user and clear cookies
/// ✅ GET  | /api/users/profile | get a user profile
/// ✅ PUT  | /api/users/profile | update a user profile
///______________________________________
