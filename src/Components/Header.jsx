import {
  faShoppingBasket,
  faTags,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../store/cart-context";
import { useCart } from "../store/cart-context";

const Header = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") === "dark" ? "dark" : "light";
  });
  const { totalQuantity } = useCart();
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  const navLinkClass =
    "text-center text-lg font-primary font-semibold text-primary py-2 transition-colors duration-200 hover:text-dark dark:text-light dark:hover:text-lighter";
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-gray-300 bg-normalbg/95 shadow-sm backdrop-blur dark:border-darkline dark:bg-darkbg/95 dark:shadow-none">
        <div className="flex items-center justify-between mx-auto max-w-6xl px-6 py-4">
          <Link to="/" className={navLinkClass}>
            <FontAwesomeIcon icon={faTags} className="h-8 w-8" />
            <span className="font-bold">SmartCart</span>
          </Link>
          <nav className="flex items-center py-2 z-10">
            <button
              className="mx-3 flex h-9 w-9 items-center justify-center rounded-full border border-primary/40 bg-white text-primary shadow-sm transition duration-300 hover:border-primary hover:bg-lighter focus:outline-none focus:ring-2 focus:ring-primary/30 dark:border-light/30 dark:bg-darkcard dark:text-light dark:hover:border-light dark:hover:bg-darkbd dark:focus:ring-light/20"
              aria-label="Toggle theme"
              onClick={toggleTheme}
            >
              <FontAwesomeIcon
                icon={theme === "dark" ? faMoon : faSun}
                className="h-4 w-4"
              />
            </button>
            <ul className="flex space-x-6">
              <li>
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    isActive ? `underline ${navLinkClass}` : navLinkClass
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? `underline ${navLinkClass}` : navLinkClass
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? `underline ${navLinkClass}` : navLinkClass
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? `underline ${navLinkClass}` : navLinkClass
                  }
                >
                  Login
                </NavLink>
              </li>
              <li>
                <Link to="/cart" className=" relative text-primary py-2">
                  <FontAwesomeIcon
                    icon={faShoppingBasket}
                    className="text-primary dark:text-light w-6"
                  />
                  <div className="absolute -top-2 -right-6 text-xs bg-yellow-400 text-black font-semibold rounded-full px-2 py-1 leading-none">
                    {totalQuantity}
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
