import * as React from "react";
import { Link } from "react-router-dom";

const SidebarItem = ({ title, link }) => {
  return (
    <div>
      <Link to={link}>{title}</Link>
    </div>
  );
};

export default SidebarItem;
