import React, { useContext, useEffect} from 'react'
import { ProductContext } from '../context/ProductProvider'

const AddedProduct = () => {

  const { products, searchResults } = useContext(ProductContext);
  console.log(searchResults.length);

  const displayProducts = searchResults.length > 0 ? searchResults : products;


  if(displayProducts.length <= 0){
     return <div className='mx-5 mt-10 font-semibold text-xl'>
      <h2>No Product Found</h2>
     </div>
  }
  

  return (
    <div className='mx-5 mt-5'>
<div className='prod-list-dash'>
       <div className='flex items-center justify-between px-16'>
       <p className='bg-red-00 flex items-center h-16'>Product List Details</p>
       </div>
 
     <div className='prod-cards px-16'>
      <div className='bg-[#e5e7eb] rounded-lg rounded-b-none h-10 flex justify-between items-center px-4'>
        <p className='-px-10'>Id</p>
        <p className='-px-10'>Name</p>
        <p className='px-10'>Price</p>
        <p></p>
      </div>
      <div className=''>
      {  displayProducts.map((el,id)=>{
        return (<div key={id} className='flex items-center justify-between mx-0 my-4 border-b border-gray-200'>
          <p className='flex items-center pb-4 px-4'>{id+1}</p>
          <p className='flex items-center  pb-4 px-4'> {el.name}</p>
          <p className='flex items-center pb-4 px-4'>${el.price}</p>
          <p className='flex items-center pb-4 px-4'>❌</p>

        </div>)
      })  }
      </div>
     </div>
    </div>
    </div>
  )
}

export default AddedProduct
