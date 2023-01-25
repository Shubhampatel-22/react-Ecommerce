import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';

import Home from './Home';
import Productlist from './Productlist';
import Categorylist from './Categorylist';
import ProductDetails from './ProductDetails';
import LoginSignUp from './LoginSignUp';
import ForgotPassword from './ForgotPassword'
import Profile from './Profile'
import ResetPassword from './ResetPassword';
import UpdatePassword from './UpdatePassword';
import UpdateProfile from './UpdateProfile';
import Cart from "./Cart"

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/product/:id' element={<ProductDetails/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/login' element={<LoginSignUp />}></Route>
          <Route path='/productlist' element={<Productlist/>}></Route>
          <Route path='/categorylist/:category' element={<Categorylist/>}></Route>
          <Route path='/password/forgot' element={<ForgotPassword />}></Route>
          <Route path='/me' element={<Profile />}></Route>
          <Route path='/password/reset/:token' element={<ResetPassword />}></Route>
          <Route path='/password/update' element={<UpdatePassword />}></Route>
          <Route path='/me/update' element={<UpdateProfile />}></Route>
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
