import React, { useContext, useState } from 'react'
import './Login.css'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'
const Login = ({setShowLogin}) => {
  const {url}=useContext(StoreContext)
  const [data,setData]=useState({email:'',password:''})
  const onChangeHandler=(event)=>{
    const name=event.target.name
    const value=event.target.value
    setData((data)=>({...data,[name]:value}))
  }

  const onLogin=async(event)=>{
    event.preventDefault()
    let newUrl=url+'/user/login'
console.log(newUrl);

    const response=await axios.post(newUrl,data)
    console.log('LoginPage response',response.data.message);
    if(response.data.success){
      setShowLogin(false)
      alert(response.data.message)
    }
  }
  return (
    <div className='login'>
      <form className="login-container" onSubmit={onLogin}>
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
          <input type="email" name='email' onChange={onChangeHandler} value={data.email} placeholder='Enter User ID'/>
          <label htmlFor="password">Enter Password:</label>
          <input type="text" name='password' onChange={onChangeHandler} value={data.password} placeholder='Enter Password'/>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Login
