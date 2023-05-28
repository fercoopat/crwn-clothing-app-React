import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.context';

import { CartDropdown } from '../../components/cart-dropdown/cart-dropdown.component';
import { CartIcon } from '../../components/cart-icon/cart-icon.components';
import { CartContext } from '../../contexts/cart.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import './navigation.styles.scss';

/* --------------------------------------------------------------------------------- */

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  const { isCardOpen } = useContext(CartContext);

  const signOutHandler = () => {
    signOutUser();
  };

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="shop">
            Shop
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              Sign Out
            </span>
          ) : (
            <>
              <Link className="nav-link" to="auth">
                Sign In
              </Link>
            </>
          )}
          <CartIcon />
        </div>
        {isCardOpen && <CartDropdown />}
      </div>

      {/* PAGES */}
      <Outlet />
    </>
  );
};

export default Navigation;
