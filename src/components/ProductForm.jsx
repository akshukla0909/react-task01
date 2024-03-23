import React, { useContext, useState } from 'react'
import { ProductContext } from '../context/ProductProvider'
import toast, { Toaster } from 'react-hot-toast';

const ProductForm = () => {

    const {addProduct} = useContext(ProductContext);
    const [name, setproductName] = useState('')
    const [price, setproductPrice] = useState(0)

    const handleForm = (e)=>{
        e.preventDefault();
        if(name===""){return toast.error("enter a name") }
        addProduct({name, price})

        setproductName("")
        setproductPrice(0)
    }


  return (
    <div>
    <div className='text-center'>
        <h2 className='mt-4 font-bold text-xl'>Add Product</h2>
        <form onSubmit={handleForm} className=''>
            <span className=''>Product Name : </span>
            <input type="text" 
            className='my-2 px-4 py-1 rounded-md border border-gray-400 outline-none w-60'
            placeholder='product name'
            value={name}
            onChange={e=> {setproductName(e.target.value)}}
            /> <br />
            <span className=''>Product Price :  </span>
            <input type="text" 
            className='my-2 px-4 py-1 rounded-md border border-gray-400 outline-none w-60'
            placeholder='price'
            value={price}
            onChange={e=> {setproductPrice(e.target.value)}}
            /><br />
            <input type="submit" 
            className='my-2 text-white bg-[#AF7EEB] px-6 py-2 font-semibold rounded-lg cursor-pointer'
            value="Add" />
        </form>
        <Toaster />
    </div>
    </div>
  )
}

export default ProductForm