import { useContext,useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../Product/product-card.component";

import './shop.styles.scss'

const Shop =() =>{
   const {products}= useContext(ProductsContext);
   const {category}=useParams()
   const [product,setProduct] =useState([])
//    console.log("Prod",products)

    useEffect(()=>{
        setProduct(products[category])
    },[products,category])

    return(
        <div className="products-container">
           {
              product &&  product.map((product)=>{
                   return <ProductCard key={product.id} product={product}></ProductCard>
                })
            
           }
            
        </div>
    )
}
export default Shop;