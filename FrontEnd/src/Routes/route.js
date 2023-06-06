import React from 'react';
import { Routes, Route } from 'react-router-dom';
import  Home  from '../Pages/Home/Home';
import  SignIn  from '../Pages/SignIn/SignIn';
import User from '../Pages/User/User';
import EditUser from '../Pages/EditUser/EditUser'
 function RouteApp() {
  return (
   
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/user" element={<User />} />
              <Route path="/EditUser" element={<EditUser />} />
          </Routes>
  
  );
}
export default RouteApp





