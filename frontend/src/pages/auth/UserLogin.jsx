import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../../styles/auth-shared.css"
 const UserLogin=()=>{
   const navigate=useNavigate();
   const handleSubmit=async(e)=>{
      e.preventDefault();
      const email=e.target.email.value;
      const password=e.target.password.value;
      const response=await axios.post("http://localhost:3000/api/auth/user/login",{
         email,
         password
      },{withCredentials:true});
      navigate("/")
   }
   return(
      <>
      <div className='auth-page-wrapper'>
         <div className='auth-card' role="region" aria-labelledby="user-login-title">
            <header>
               <h1 id='user-login-title' className='auth-title'>Welcome back</h1>
               <p className='auth-subtitle'>Sign in to continue your food journey.</p>
            </header>
            <form className='auth-form' onSubmit={handleSubmit} noValidate>
               <div className='field-group'>
                  <label htmlFor='email'>Email</label>
                  <input type="text" placeholder='you@example.com' id='email' name='email' autoComplete="email"/>
               </div>
               <div className='field-group'>
                  <label htmlFor='password'>Password</label>
                  <input type="password" placeholder='••••••••' id='password' name='password' autoComplete="current-password"/>
               </div>
               <button className='auth-submit'>Sign In</button>
            </form>
            <div className='auth-alt-action'>
               New here ?<a href="/user/register">Create Account</a>
            </div>
         </div>

      </div>
      </>
   )
 }

 export default UserLogin;