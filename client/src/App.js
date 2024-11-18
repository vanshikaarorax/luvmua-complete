import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Home from './pages/Home';
import Loading from './components/Loading';
import Notification from './components/Notification';
import Room from './components/rooms/Room';
import HomePage from './pages/HomePage/HomePage';

const App = () => {
  return (
    <>
      <Loading />
      <Notification />
      <BrowserRouter>
        <Routes>
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
      <Room />
    </>
  );
};

export default App;
