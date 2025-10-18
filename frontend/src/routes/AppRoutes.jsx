import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from '../pages/auth/Register';
import UserLogin from '../pages/auth/UserLogin';
import UserRegister from '../pages/auth/UserRegister';
import FoodPartnerLogin from '../pages/auth/FoodPartnerLogin';
import FoodPartnerRegister from '../pages/auth/FoodPartnerRegister';

const AppRoutes=()=>{
    return(
    <Router>
        <Routes>
            <Route path='/register' element={<Register/>}/>
            <Route path="/user/login" element={<UserLogin/>}/>
            <Route path='/user/register' element={<UserRegister/>}/>
            <Route path='/food-partner/login' element={<FoodPartnerLogin/>}/>
            <Route path='/food-partner/register'element={<FoodPartnerRegister/>}/>
        </Routes>
    </Router>
    )
}

export default AppRoutes;