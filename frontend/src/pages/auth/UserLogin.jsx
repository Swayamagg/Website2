import React from 'react';
import "../../styles/auth-shared.css"
 const UserLogin=()=>{
   return(
      <>
      <div className='auth-page-wrapper'>
         <div className='auth-card' role="region" aria-labelledby="user-login-title">
            <header>
               <h1 id='user-login-title' className='auth-title'>Welcome back</h1>
               <p className='auth-subtitle'>Sign in to continue your food journey.</p>
            </header>
            <form className='auth-form' noValidate>
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