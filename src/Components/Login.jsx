import React from 'react'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { AuthContext } from '../App.jsx'
import { useNavigate } from 'react-router-dom'
import '../App.css'

const Login = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState:{errors, isSubmitting},
  }=useForm()

  let {islogin,setIslogin} = useContext(AuthContext);
  let navigate = useNavigate();

  async function Submit(data) {
    await new Promise((resolve)=> setTimeout(resolve,5000));
    setIslogin(true);
    localStorage.setItem("islogin",true);
    navigate("/dashboard");
  }

  return (
    <>
    <div className='wrapper'>
    <form onSubmit={handleSubmit(Submit)} className='login-form'>
      <div>
        <label>Email:</label>
          <input type='email' className='inputfield' {...register('Email', {required:"Email is Required", 
          pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email address"}})}/>
          {errors.Email && <p>{errors.Email.message}</p>}
      </div>
      <br />
      
      <div>
        <label>Password:</label>
        <input type='password' className='inputfield' {...register('Password', {required:"Password is required",
          minLength:{value:8, message:"Min 8 Characters required"}})}/>
        {errors.Password && <p>{errors.Password.message}</p>}
      </div>
          <br/>
      <input type='submit' style={{backgroundColor:isSubmitting?'green':'blueviolet',color:'white', height:"30px", 
      width:"90px", border:"none",borderRadius:"10px", fontSize:"15px", fontWeight:"bolder", cursor:'pointer'}}
      disabled={isSubmitting} value={isSubmitting?"Logging in":"Submit"}/>
    </form>
    </div>  
    </>
  )
}

export default Login