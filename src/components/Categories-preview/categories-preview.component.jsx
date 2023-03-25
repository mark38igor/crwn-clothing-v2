
import Categories from '../categories/categories.component';
import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
const CategoriesPreview =() =>{
    const {products}=useContext(ProductsContext)
    return(
        <div className='categories-container'>
        {
        Object.keys(products).map((title)=>{
            
           return products[title].filter((_,index)=>{
                return index<1
            }).map((product)=>{
                   return<Categories key={product.id} imageUrl={product.imageUrl} title={title} />
            
            })
        })
        }
    </div>
    )
}
export default CategoriesPreview;