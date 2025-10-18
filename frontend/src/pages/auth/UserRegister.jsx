import React from 'react';
import "../../styles/auth-shared.css"
import { Link } from 'react-router-dom';

 const UserRegister=()=>{
    return(
      <>
      <div className='auth-page-wrapper'>
         <div className='auth-card'role='region' aria-labelledby='user-register-title' >
            <header>
               <h1 id='user-register-title'className='auth-title'>Create your account</h1>
               <p className='auth-subtitle' >Join to explore and enjoy delicious meals.</p>
            </header>
            <nav className='auth-alt-action' style={{marginTop:"-4px"}}>
               <strong style={{fontWeight:600}}>Switch:</strong> <Link to="/user/register">User</Link> • <Link to="/food-partner/register">Food Partner</Link>
            </nav>
            <form action="auth-form">
               <div className='two-col'>
                  <div className='field-group'>
                     <label htmlFor="firstName">First Name</label>
                     <input type="text" name='firstName' placeholder='Jane' autoComplete='given-name' />
                  </div>
                  <div className='field-group' style={{marginTop:"4px"}}>
                     <label htmlFor="firstName">Last Name</label>
                     <input type="text" name='lastName' placeholder='Doe' autoComplete='family-name' />
                  </div>
               </div>
                  <div className='field-group' style={{marginTop:"4px"}}>
                     <label htmlFor="email">Email</label>
                     <input type="text" name='email' placeholder='you@example.com' autoComplete='email' />
                  </div>
                  <div className='field-group' style={{marginTop:"4px"}}>
                     <label htmlFor="password">Password</label>
                     <input type="password" name='password' id='password' placeholder='••••••••' autoComplete='new-password' />
                  </div>
            </form>
            <button className='auth-submit' type='submit'>Sign up</button>
            <div className='auth-alt-action'>
              Already Account ? <Link to='/user/login'>Sign in</Link>
            </div>
         </div>
      </div>
      </>
    )
 }

 export default UserRegister;