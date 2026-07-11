import {
  faShoppingBasket,
  faTags,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

const Header = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") === "dark" ? "dark" : "light";
  });

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
          <a href="/" className={navLinkClass}>
            <FontAwesomeIcon icon={faTags} className="h-8 w-8" />
            <span className="font-bold">SmartCart</span>
          </a>
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
                <a href="/home" className={navLinkClass}>
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className={navLinkClass}>
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className={navLinkClass}>
                  Contact
                </a>
              </li>
              <li>
                <a href="/login" className={navLinkClass}>
                  Login
                </a>
              </li>
              <li>
                <a
                  href="cart"
                  className="text-primary py-2 transition-colors duration-200 hover:text-dark dark:text-light dark:hover:text-lighter"
                >
                  <FontAwesomeIcon
                    icon={faShoppingBasket}
                  />
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
