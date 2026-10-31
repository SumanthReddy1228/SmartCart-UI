import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="flex items-center justify-center border-t border-gray-200 bg-normalbg py-4 font-primary text-gray-700 transition-colors duration-300 dark:border-darkline dark:bg-darkbg dark:text-darkmuted">
      Buit with
      <FontAwesomeIcon
        icon={faHeart}
        className="text-red-600 mx-1 animate-pulse"
        aria-hidden="true"
      />
      by
      <Link
        to="/"
        className="px-1 font-semibold text-primary transition-colors duration-300 hover:text-dark dark:text-light dark:hover:text-lighter"
      >
        SmartCart
      </Link>
    </footer>
  );
}
