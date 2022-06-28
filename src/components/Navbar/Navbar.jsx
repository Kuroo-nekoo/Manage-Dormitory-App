import * as React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="border border-solid border-gray-600 flex justify-around fixed w-full items-center">
      <div className="py-2 px-3 inline-block">
        <Link to="/">Home</Link>
      </div>
      <div className="group relative h-full inline-block">
        <div className="py-2 px-3">Account</div>
        <div className="space-x-4 hidden group-hover:block absolute rounded border-solid border-black border z-10 bg-white">
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
