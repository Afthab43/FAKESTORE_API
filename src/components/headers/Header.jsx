import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const navigations = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Products",
    path: "/products",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  return (
    <header className="text-gray-600 body-font shadow-xl">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <img src={logo} alt="" className="h-8 w-8" />
          <span className="ml-3 text-xl">FakeStore-Ecom</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {navigations.map((nav) => {
            return (
              <Link
                to={nav.path}
                key={nav.name}
                className="mr-5 hover:text-gray-900"
              >
                {nav.name}
              </Link>
            );
          })}
        </nav>
        <button className="inline-flex items-center text-white bg-purple-900 border-0 py-2 px-4 focus:outline-none hover:bg-purple-800 rounded text-base mt-4 md:mt-0">
          <Link to="/cart">Go to Cart</Link>
          <svg
            fill="none"
            stroke="currentColor"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
