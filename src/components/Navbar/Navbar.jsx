import * as React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = React.useState("");

  let prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      setNav("top-0");
    } 
    else {
      setNav("-top-12");
    }
    prevScrollpos = currentScrollPos;
  }

  return (
    <div className={nav + " border transition duration-300 ease-in-out transition-all border-solid border-gray-600 flex justify-around sticky w-full items-center"}>
      <div className="py-2 px-3 inline-block">
        <Link to="/">Home</Link>
      </div>
      <div className="group relative h-full inline-block">
        <div className="py-2 px-3">Account</div>
        <div className="space-x-4 hidden group-hover:block absolute rounded border-solid border-black border z-10 bg-white">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
