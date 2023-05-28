import Button from '../button/button.component';
import './cart-dropdown.styles.scss';

export function CartDropdown() {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        <Button>Go To Checkout</Button>
      </div>
    </div>
  );
}
