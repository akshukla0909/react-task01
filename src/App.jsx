import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import ProductProvider from './context/ProductProvider'


const App = () => {


  return (
    <ProductProvider>
     <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
     </Routes>
    </ProductProvider>
  )
}

export default App;