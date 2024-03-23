import React, { useState } from 'react'
import { useContext } from 'react'
import { ProductContext } from '../context/ProductProvider'

const SearchBar = () => {

  const {searchProduct} =  useContext(ProductContext)
  const [data, setData] = useState('')

  const handleSearch = (e)=>{
       const inp = e.target.value
       setData(inp)
      searchProduct(inp)
  }

  return (
    <div className='absolute top-[48%] right-20'>
      <input type="text" 
       placeholder='Search product' 
       className='h-10 px-2 outline-none rounded-lg rounded-r-none border border-gray-400'
       name='search'
       value={data}
       onChange={handleSearch}
       />
       <button 
       className='p-2 rounded-lg rounded-l-none bg-[#AF7EEB] text-white border border-gray-400'
       >Search</button>
    </div>
  )
}

export default SearchBar