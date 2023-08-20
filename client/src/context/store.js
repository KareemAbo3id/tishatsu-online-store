import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth.slice';
import { apiReducerPath, apiReducer, apiMD } from './slices/api.slice';

const store = configureStore({
  // the reducer::
  reducer: {
    auth: authReducer,
    [apiReducerPath]: apiReducer,
  },

  // the middleware:
  middleware: (getDefaultMD) => getDefaultMD().concat(apiMD),

  // the devTools:
  devTools: true,
});

export default store;
