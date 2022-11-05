import React from 'react'
import { Routes, Route} from "react-router-dom";
import Dashboard from '../Components/Dashboard';
import Home from '../Components/Home';
import Login from '../Components/Login';
import Login2 from '../Components/Login2';
import Signup from '../Components/SignUp';
import Signup2 from '../Components/Signup2';
import Store from '../Components/Store';
// import PrivateRoutes from './PrivateRoutes';
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/signup2" element={<Signup2/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/login2" element={<Login2/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/store" element={<Store/>} />
        {/* <Route path="/dashboard" element={<PrivateRoutes><Dashboard/></PrivateRoutes>} />
        <Route path="/store" element={<PrivateRoutes><Store/></PrivateRoutes>} /> */}
      </Routes>
    </div>
  )
}

export default AllRoutes