import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import store from './context/store.js';
import { Provider } from 'react-redux';
import { App } from './App.jsx';
import { HomeScreen } from './screens/Home.screen.jsx';
import { LoginScreen } from './screens/Login.screen.jsx';
import { SignupScreen } from './screens/Signup.screen.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

// app html root:
const APP_ROOT = document.getElementById('root');

// app router:
const APP_ROUTER = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/signup" element={<SignupScreen />} />
    </Route>
  )
);

// app dom tree:
const APP_DOM = (
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={APP_ROUTER} />
    </React.StrictMode>
  </Provider>
);

// app render:
ReactDOM.createRoot(APP_ROOT).render(APP_DOM);
