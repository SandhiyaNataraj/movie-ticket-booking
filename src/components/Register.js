import React from 'react'
import { Link } from 'react-router-dom';
function Register() {
  return (
    <div className='register'>
    <span className="loginTitle">Register</span>
      <form className="loginForm">
        <label>Username</label>
        <input className="loginInput" type="text" placeholder="Enter your username..." />
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="Enter your email..." />
        <label>Confirm Email</label>
        <input className="loginInput" type="text" placeholder="Confirm your email..." />
        <label>Password</label>
        <input className="loginInput" type="text" placeholder="Enter your password..." />
        <Link to="/">
        <button className="loginButton">Register</button>
        </Link>
      </form>
      <Link to="/login">
        <button className="loginRegisterButton">Login</button>
      </Link>
    </div>
   )
}
export default Register;

