import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import { CartItem } from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

export function CartDropdown() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length
          ? cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))
          : 'Your cart is empty'}
      </div>
      <Button>Go To Checkout</Button>
    </div>
  );
}
