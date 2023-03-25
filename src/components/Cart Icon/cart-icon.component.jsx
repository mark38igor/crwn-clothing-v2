import './cart-icon.styles.scss'
import {ReactComponent as ShopIcon} from '../../assets/shopping-bag.svg'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
const CartIcon =() =>{
    let {setCartOpen,isCartOpen,totalItems}=useContext(CartContext)
    return(
        <div className='cart-icon-container' onClick={()=>{
            setCartOpen(!isCartOpen)
        }} >
            <ShopIcon className='shopping-icon'></ShopIcon>
            <span className='item-count'>{totalItems}</span>
        </div>
    )
}
export default CartIcon;