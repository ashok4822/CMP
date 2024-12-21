import React from 'react'
import './Login.css'
const Login = ({setShowLogin}) => {
  return (
    <div className='login'>
      
      <form className="login-container">
        <div className='login-icon'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9jv9vGUdmvco5sw2cXQVjBENe9sy-YNA7Kw&s" alt="" />
        <p onClick={()=>setShowLogin(false)}>x</p>
        </div>
        <hr/>
        <div className='login-title'>
            <h2>LOGIN</h2>
        </div>
        <div className="login-inputs">
          <label htmlFor="email">Enter Your ID/Email:</label>
          <input type="email" name='email' placeholder='Enter User ID'/>
          <label htmlFor="password">Enter Password:</label>
          <input type="text" name='password' placeholder='Enter Password'/>
        </div>
      </form>
    </div>
  )
}

export default Login
