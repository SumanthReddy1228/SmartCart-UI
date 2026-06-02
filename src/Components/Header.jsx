import {
  faBagShopping,
  faCartShopping,
  faShoppingBasket,
  faStore,
  faTags,
} from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons/faShoppingBag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <a href="/">
            <FontAwesomeIcon icon={faTags} className="fa-icon" />
            <span>SmartCart</span>
          </a>
          <nav className="nav">
            <ul>
              <li>
                <a href="/home" className="nav-link">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="nav-link">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="nav-link">
                  Contact
                </a>
              </li>
              <li>
                <a href="/login" className="nav-link">
                  Login
                </a>
              </li>
              <li>
                <a href="cart" className="nav-link">
                  <FontAwesomeIcon icon={faShoppingBasket} />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
