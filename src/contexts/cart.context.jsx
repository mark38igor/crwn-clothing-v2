import { createContext, useEffect, useState } from 'react';

const setCart = (cartItems, addToCart) => {
  // check whetehet item contains in  cart
  // if yes increment quantity
  //no, then set quantity as 0

  const checkItemExists = cartItems.some((item, index) => {
    if (item.id === addToCart.id) {
      cartItems[index].quantity++;
      return true;
    }
    return false;
  });
  return checkItemExists
    ? [...cartItems]
    : [...cartItems, { ...addToCart, quantity: 1 }];
};

const removeItemFromCart = (cart, removeItem) => {
  const newCartItems = cart.filter((item, index) => {
    if (item.id !== removeItem.id) {
      return item;
    }
  });
  console.log('Removed Item new list', newCartItems);
  return newCartItems;
};

export const CartContext = createContext({
  isCartOpen: false,
  setCartOpen: () => {},
  cartItems: [],
  addToCart: () => {},
  totalItems: null,
  removeFromCart: () => {},
});

const CartProvider = ({ children }) => {
  let [isCartOpen, setCartOpen] = useState(false);
  let [cartItems, setCartItems] = useState([]);
  let [totalItems, setTotalItems] = useState(0);
  const cartitems_local_storage = JSON.parse(
    localStorage.getItem('cartitems_local_storage')
  );

  useEffect(() => {
    if (cartItems.length > 0) {
      console.log('Length2', cartItems.length);

      setTotalItems(
        cartItems.reduce((count, item) => {
          return count + item.quantity;
        }, 0)
      );
    } else {
      cartitems_local_storage
        ? setCartItems(cartitems_local_storage)
        : setTotalItems(0);
    }
  }, [cartItems]);

  const addToCart = (productToAdd) => {
    const items = setCart(cartItems, productToAdd);
    setCartItems(items);
    localStorage.removeItem('cartitems_local_storage');
    localStorage.setItem('cartitems_local_storage', JSON.stringify(items));
  };
  const removeFromCart = (productToRemove) => {
    const items =removeItemFromCart(cartItems, productToRemove);
    setCartItems(items);
    localStorage.removeItem('cartitems_local_storage');
    localStorage.setItem('cartitems_local_storage', JSON.stringify(items));
  };

  const value = {
    isCartOpen,
    setCartOpen,
    cartItems,
    addToCart,
    totalItems,
    removeFromCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
export default CartProvider;
