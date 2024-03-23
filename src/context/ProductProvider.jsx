import React, { createContext, useState } from 'react'
import toast from 'react-hot-toast';

export const ProductContext = createContext({
    products : [],
    setProducts : ()=>{},
    addProduct : ()=>{},
    searchProduct : ()=>{},
});


const ProductProvider = ({children}) => {

    const [products, setProducts] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    const addProduct = (elem) => {
      const existingProduct = products.find(
        (product) => product.name.toLowerCase() === elem.name.toLowerCase()
      );
      if (!existingProduct) {
        setProducts([...products, elem]);
        console.log(products);
      } else {
        toast.error("Product already exists!")        
        console.error('Product already there'); 
        //fixed react-hot-toast for msg
      }
    };

    const searchProduct = (searchData) => {
      // console.log(searchData);
     const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchData.toLowerCase()));
     console.log(typeof(filteredProducts));
      console.log(filteredProducts);
       setSearchResults(filteredProducts)
    };

  return (
    <ProductContext.Provider value={{products,setProducts, addProduct, searchProduct, searchResults}}>
          {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider