import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'


const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font border-t-2">
        <div className="container px-5 py-7 mx-auto flex items-center sm:flex-row flex-col">
          <Link
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          >
            <img src={logo} alt="" className="h-8 w-8"/>
            <span className="ml-3 text-xl">FakeStore-Ecom</span>
          </Link>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2023 fake-api Ecommerce —
            <a
              href="https://www.linkedin.com/in/afthab-m-a677b6293/"
              className="text-purple-800 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @afthab_mydn
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link  className="text-purple-800">
              <svg
                fill="currentColor"
                stroke="currentColor"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </Link>
            <Link className="ml-3 text-purple-800">
              <svg
                fill="none"
                stroke="currentColor"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </Link>
            <Link  className="ml-3 text-purple-800">
              <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
