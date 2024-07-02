import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Layout from './pages/Layout/Layout';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import UserProfile from './pages/UserProfile/UserProfile';
import Error404 from './pages/Error404/Error404';
import Search from './pages/Search/Search';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login/" element={<Login />} />
          <Route path="register/" element={<Register />} />
          <Route path="user_profile/:username" element={<UserProfile />} />
          <Route path="search/:query" element={<Search />} />
        </Route>
        
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
