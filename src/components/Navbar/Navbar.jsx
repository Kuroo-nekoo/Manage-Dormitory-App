import * as React from "react";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { MdArrowDropDown } from "react-icons/md";

const Navbar = () => {
  const [navPosition, setNavPosition] = React.useState("");
  const [dropdownShow, setDropdownShow] = React.useState(false);
  const token = localStorage.getItem("token");
  let userData;
  if (token.length > 0) {
    userData = jwt_decode(token);
  }

  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      setNavPosition("top-0");
    } else {
      setNavPosition("-top-12");
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <div
      className={
        navPosition +
        "border duration-300 ease-in-out transition-all border-solid border-gray-600 flex justify-around sticky w-full items-center"
      }
    >
      <div className="py-2 px-3 inline-block">
        <Link to="/">Home</Link>
      </div>
      {userData ? (
        <div className="py-2 px-3">
          {userData.name}
          <button className="group relative inline">
            <MdArrowDropDown
              className="inline"
              onClick={() => setDropdownShow(!dropdownShow)}
            ></MdArrowDropDown>
            <div className={`${dropdownShow ? "show" : "hidden"}`}>
              <Link to="/user/control-panel" className="absolute right-0">
                Control Panel
              </Link>
            </div>
          </button>
        </div>
      ) : (
        <div className="group relative h-full">
          <div className="py-2 px-3">Account</div>
          <div className="hidden group-hover:block absolute rounded border-solid border-black border z-10 bg-white">
            <Link to="/login">Login</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
