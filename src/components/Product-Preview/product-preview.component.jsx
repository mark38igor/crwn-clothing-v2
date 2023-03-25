import Button from '../button/button.component'
import '../Product/product-card.styles.scss'
const ProductPreview =({product,category}) =>{
    const {name,imageUrl}=product;
    return(
        
        <div className="product-card-container">
        <img src={imageUrl} alt={name} />
        <Button style_type="inverted" >{category}</Button>
        </div>
    )
}
export default ProductPreview;