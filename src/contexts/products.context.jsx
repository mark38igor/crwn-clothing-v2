import { createContext, useEffect, useState } from "react";
import category_data from '../shop-data.js'
import { getCategoryAndDocuments } from "../utils/firebase/firebase.utils.js";
// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";
export const ProductsContext=createContext({
    products:{}
}) 

const ProductsProvider =({children}) =>{

    const [products,setProducts]=useState({});

    useEffect(()=>{
        const getProducts= async()=>{
            const categories= await getCategoryAndDocuments();
             setProducts(categories);
             localStorage.setItem('product_categories', JSON.stringify(categories));
        }
       const product_categories =JSON.parse(localStorage.getItem('product_categories'));  
       product_categories?setProducts(product_categories):getProducts()
      //clean up    
       return () => {                                                               // 
          setProducts({})
       };
    },[])
    const value={products,setProducts}
    return <ProductsContext.Provider value={value} >{children}</ProductsContext.Provider>
}
export default ProductsProvider;