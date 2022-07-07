import * as React from "react";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { MdArrowDropDown } from "react-icons/md";

const Navbar = () => {
  const [navPosition, setNavPosition] = React.useState("");
  const [dropdownShow, setDropdownShow] = React.useState(false);
  const token = localStorage.getItem("token");
  let userData;
  if (token && token.length > 0) {
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
        " z-50 bg-white bg-opacity-50 duration-300 ease-in-out transition-all border-solid border-gray-600 flex justify-around sticky w-full items-center"
      }
    >
      <div className="flex py-2 px-3 inline-block">
        <div className="px-2">
          <Link to="/">Giới thiệu</Link>
        </div>
        <div className="px-2">
          <Link to="/">Thông báo</Link>
        </div>
        <div className="px-2">
          <Link to="/">Tin tức</Link>
        </div>
        <div className="px-2">
          <Link to="/">Hoạt động</Link>
        </div>
        <div className="px-2">
          <Link to="/">Hướng dẫn</Link>
        </div>
        <div className="px-2">
          <Link to="/">Nội quy</Link>
        </div>
      </div>
      {userData ? (
        <button
          className="py-2 px-3 group relative"
          onClick={() => setDropdownShow(!dropdownShow)}
        >
          {userData.name}
          <MdArrowDropDown className="inline"></MdArrowDropDown>
          <div className={`${dropdownShow ? "show" : "hidden"}`}>
            <Link to="/user/control-panel" className="absolute right-0">
              Control Panel
            </Link>
          </div>
        </button>
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
