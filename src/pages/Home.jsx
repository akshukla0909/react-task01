import React, { useEffect } from 'react'
import ProductForm from '../components/ProductForm'
import {useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast'
import AddedProduct from '../components/AddedProduct'
import SearchBar from '../components/SearchBar';


const Home = () => {

    const navigate = useNavigate()
 
    const handleLogOut = ()=>{
        console.log("log out success, token removed");
        localStorage.removeItem('token')
        navigate('/login')
        setTimeout(() => {
          toast.success('Logout Success')
        }, 300);

    }

    // watch if token avail or not
    // useEffect(() =>{

    //     if(!localStorage.getItem('token')) { 
    //         navigate('/login')
    //     }

    // },[localStorage.getItem('token')])
    

       
   
  return (
    <>
     <div className="nav h-[60px] bg-[#AF7EEB] flex items-center justify-between px-3 relative">
        <h2 className='text-white text-xl font-semibold'>HomePage</h2>
        <button onClick={handleLogOut} className='text-white font-semibold  hover:border-[#AF7EEB] px-4 py-2 rounded-lg'>Logout</button>
        {/* SearchBar */}
     </div>
    <ProductForm/>
     <SearchBar/>
     <AddedProduct/>
    </>
  )
}

export default Home;