import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

export function CartIcon() {
  const {
    isCardOpen,
    setIsCardOpen,

    cartCount,
  } = useContext(CartContext);

  const toggleIsCardOpen = () => setIsCardOpen(!isCardOpen);

  return (
    <div className="cart-icon-container" onClick={toggleIsCardOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
}
