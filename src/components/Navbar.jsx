import React from "react";
import { NavLink } from "react-router-dom";
import SignUpLoginBtnActions from "../UI/Buttons/SignUpLoginBtns";
import SignUpLoginBtns from "../UI/Buttons/SignUpLoginBtns";

const Navbar = () => {
  return (
    <div className="bg-blue-500">
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
        <div className="flex items-center">
          <a
            href="#"
            className="flex items-center justify-center text-3xl font-bold leading-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="40"
              height="40"
              className="mr-4"
            >
              <path d="M96 96c0-35.3 28.7-64 64-64l288 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L80 480c-44.2 0-80-35.8-80-80L0 128c0-17.7 14.3-32 32-32s32 14.3 32 32l0 272c0 8.8 7.2 16 16 16s16-7.2 16-16L96 96zm64 24l0 80c0 13.3 10.7 24 24 24l112 0c13.3 0 24-10.7 24-24l0-80c0-13.3-10.7-24-24-24L184 96c-13.3 0-24 10.7-24 24zm208-8c0 8.8 7.2 16 16 16l48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16l48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0c-8.8 0-16 7.2-16 16zM160 304c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-256 0c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-256 0c-8.8 0-16 7.2-16 16z" />
            </svg>
            <h3 className="font-bold text-3xl text-gray-800">The Insight Stream</h3>
          </a>

          {/* Navigation Links */}
          <ul className="flex space-x-6 ml-6">
            <li>
              <NavLink to="/" className="px-4 py-2 hover:underline">
                Newsfeed
              </NavLink>
            </li>
            <li>
              <NavLink to="/events" className="px-4 py-2 hover:underline">
                Events
              </NavLink>
            </li>
            <li>
              <NavLink to="/opinion" className="px-4 py-2 hover:underline">
                Opinion
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="px-4 py-2 hover:underline">
                About Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Buttons (aligned to the far right) */}
        <div className="flex items-center ml-auto">
          <SignUpLoginBtns />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
