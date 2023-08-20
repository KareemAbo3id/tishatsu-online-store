import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// set a key to current user (dealing with localStorage):
export const CURRENT_USER_KEY = 'currentUser';

// set the base query, default to 'localhost:xxxx' but I use proxy, so set to '':
export const BASE_QUERY = fetchBaseQuery({ baseUrl: '' });

// user api url:
export const USERS_URLS = {
  base: '/',
  auth: '/api/users/auth',
  profile: '/api/users/profile',
  logout: '/api/users/logout',
};
