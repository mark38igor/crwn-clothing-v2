import { useContext, useState } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';

import './checkout-item.styles.scss'
import './checkout.styles.scss'

const Checkout = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  let totalPrice = 0;

  const removeItem = (item) => {
    removeFromCart(item);
  };
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((item) => {
        totalPrice = totalPrice + item.quantity * item.price;
        return(
        <div className='checkout-item-container'  key={item.id}>
                <div className='image-container'>
                    <img src={item.imageUrl} alt={item.name} />
                </div>
                <span className='name'>{item.name}</span>
                <span className='quantity'>{item.quantity}</span>
                <span className='price'>{item.price}</span>
                <div className='remove-button'>
                    <Button
                    onClick={() => {
                        removeItem(item);
                    }}
                    >
                    Remove
                    </Button>
                </div>
            
        </div>
        )
      })}
      <span className='total'>Total value: {totalPrice}</span>
    </div>
  );
};
export default Checkout;
