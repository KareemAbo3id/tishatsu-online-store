import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import store from './context/store.js';
import { Provider } from 'react-redux';
import { App } from './App.jsx';
import { HomeScreen } from './screens/Home.screen.jsx';
import { LoginScreen } from './screens/Login.screen.jsx';
import { SignupScreen } from './screens/Signup.screen.jsx';
import { APP_DOC_TITLE } from './constants/docTitle.const.js';

// font
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// theme:
const theme = createTheme({
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
  },
});

// app html root:
const APP_ROOT = document.getElementById('root');

// app router:
const APP_ROUTER = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route
        index={true}
        path="/"
        element={<HomeScreen documentTitle={APP_DOC_TITLE.homeTitle} />}
      />
      <Route
        path="/login"
        element={<LoginScreen documentTitle={APP_DOC_TITLE.loginTitle} />}
      />
      <Route
        path="/signup"
        element={<SignupScreen documentTitle={APP_DOC_TITLE.signupTitle} />}
      />
    </Route>
  )
);

// app dom tree:
const APP_DOM = (
  <Provider store={store}>
    <React.StrictMode>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <RouterProvider router={APP_ROUTER} />
      </ThemeProvider>
    </React.StrictMode>
  </Provider>
);

// app render:
ReactDOM.createRoot(APP_ROOT).render(APP_DOM);
