import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../utils/cartSlice';
import { ItemList } from '../components';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="p-4 m-4 text-center">
      <h1 className="text-2xl font-bold">Cart</h1>
      <button
        className="m-2 p-2 bg-black text-white rounded-lg"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 && (
        <h1 className="text-center">
          Cart is empty please add items to the cart
        </h1>
      )}
      <div className="w-6/12 m-auto text-center flex items-center">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
