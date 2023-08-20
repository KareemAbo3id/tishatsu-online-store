import { createSlice } from '@reduxjs/toolkit';
import { CURRENT_USER_KEY } from '../utilities/consts.utility';

const localStoredUser = (key) => {
  return localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key))
    : null;
};

const initialState = {
  userInfo: localStoredUser(CURRENT_USER_KEY),
};

// Create a slice for the user authentication:
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Set user info in localStorage (login):
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(action.payload));
    },

    // Remove user info from localStorage (logout):
    removeUserInfo: (state, action) => {
      state.userInfo = null;
      localStorage.removeItem(CURRENT_USER_KEY);
    },
  },
});

// export the action:
export const { setUserInfo, removeUserInfo } = authSlice.actions;

export default authSlice.reducer; // as authReducer
