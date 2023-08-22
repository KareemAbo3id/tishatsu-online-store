import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from './components/Header.component';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <main className="vh-100" style={{ fontSize: '15px' }}>
      <Header />
      <ToastContainer />
      <Outlet />
    </main>
  );
};
