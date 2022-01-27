import './App.scss';
import {Routes , Route , Navigate} from "react-router-dom";
import Login from "./Pages/Login/login";
import Home from "./Pages/Home/home";
import Profile from "./Pages/Profile/profile";

function App() {
  return (
    <>
    <div className='container'>
      <Routes>
      <Route path='' element={<Navigate to='/login' />} />
        <Route path="login" element={<Login/>} />
        <Route path="home" element={<Home/>} />
        <Route path="profile/:id" element={<Profile/>} />
        <Route path='*' element={<h1>Not found 404</h1>} />
      </Routes>
    </div>
    </>
  );
}

export default App;
