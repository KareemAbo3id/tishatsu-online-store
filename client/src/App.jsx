import { Outlet } from 'react-router-dom';
import Header from './components/Header.component';

const App = () => {
  return (
    <div className="vh-100" style={{ fontSize: '15px' }}>
      <Header />
      <Outlet />
    </div>
  );
};

export default App;
