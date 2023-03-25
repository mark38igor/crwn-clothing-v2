import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import CartItem from '../Cart Item/cart-item.component';
import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/checkout";
    navigate(path);
  };
  return (
    <div className="cart-dropdown-container ">
      <div className="cart-items">
        {cartItems.map((item) => {
          return <CartItem key={item.id} cartItem={item}></CartItem>;
        })}
      </div>
      <Button onClick={routeChange}>CheckOut</Button>
    </div>
  );
};
export default CartDropdown;
