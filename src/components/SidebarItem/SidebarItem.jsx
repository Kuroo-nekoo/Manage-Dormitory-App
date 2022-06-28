import * as React from "react";
import { Link } from "react-router-dom";

const SidebarItem = ({ title, Icon, link }) => {
  return (
    <div>
      <Link to={link}>{title}</Link>
      {/* <Icon></Icon> */}
    </div>
  );
};

export default SidebarItem;
