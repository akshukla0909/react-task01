import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate}  from 'react-router-dom'
import toast from 'react-hot-toast'


const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const submitHandler = async (e)=>{
       e.preventDefault();

       try {
       const resp = await axios.post("https://reqres.in/api/login", {email, password})
       console.log(resp.data);

       if(resp.status===200){
        localStorage.setItem('token', resp.data.token)
        console.log("login success");
        navigate('/')
        setTimeout(() => {
          toast.success('Login Success')
        }, 300);
      }
      
       } catch (error) {
        console.log(error);
        toast.error('password or email wrong');
       }

  }

  // if token already there render homepage
  useEffect(() =>{
    if(localStorage.getItem('token')) {
      navigate('/')
    }
    },[localStorage.getItem('token')])


  return (
    <div className='w-1/2 m-auto my-4'>

<form className="flex flex-col space-y-4" onSubmit={submitHandler} >
  <h1 className="text-xl font-bold text-center mb-4">Login</h1>
  <div className="flex flex-col">
    <label htmlFor="email" className="text-sm font-medium">Email:</label>
    <input type="text" id="email" 
    name="email" required 
    placeholder='Email'
    value={email}
    onChange={(e)=>{setEmail(e.target.value)}}
    className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#AF7EEB]"/>
  </div>
  <div className="flex flex-col">
    <label htmlFor="password" className="text-sm font-medium">Password:</label>
    <input type="password" id="password" name="password" 
    placeholder='Password'
    value={password}
    onChange={(e)=>{setPassword(e.target.value)}}
    required className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#AF7EEB]"/>
  </div>
  <button type="submit" className="w-full py-2 bg-[#AF7EEB] text-white rounded-md hover:bg-[#AF7EEB]">Login</button>
</form>
      
    </div>
  )
}

export default Login