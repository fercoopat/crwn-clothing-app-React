import './checkout.styles.scss';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { CheckoutItem } from '../../components/checkout-item/checkout-item.component';

const headers = ['Product', 'Description', 'Quantity', 'Price', 'Remove'];

export function Checkout() {
  const { cartItems, totalPrice } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        {headers.map((header) => (
          <div className="header-block">
            {' '}
            <span>{header}</span>{' '}
          </div>
        ))}
      </div>
      {cartItems.length !== 0 ? (
        cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))
      ) : (
        <span className="no-items">No items</span>
      )}
      {cartItems.length !== 0 && (
        <span className="total">Total: ${totalPrice}</span>
      )}
    </div>
  );
}
